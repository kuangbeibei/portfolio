
1. 2022.06.27 在next项目中，在styled中引入image模块作为background，需要.src才可以，不然会报重载的错误

``` 

    import styled from "styled-components";
    import { images as myImages } from "Constants/index";
        
        export const AboutSection = styled.section`
        width: 100px;
        height: 200px;
        background: url(${myImages.selfie.src });
        background - size: contain;
        box - shadow: 0 0 9px 1px rgba(255, 255, 255, .8);
    `;
```

2. client.ts中配置的projectId，似乎无法从env中获取，先写死再解决

```
    Configuration must contain `projectId`
```

3. header做特效：scroll down隐藏， scroll up显示。因为nexjs不能用useLayoutEffect所以用useEffect。通过获取document.documentElement.scrollTop来缓存上一次，和这一次的进行比较。eslint和ts提示，把lastScrollTop放在useRef缓存。
   
```
     let lastScrollTop = useRef(0);

    const [isShown, setShown] = useState(true)

    useEffect(() => {
        const handleResize = () => { }
        
        window.addEventListener('resize', handleResize)

        const handleScroll = () => {
            const currentScrollTop = document.documentElement.scrollTop;
            if (lastScrollTop.current > currentScrollTop) { // scroll up
                setShown(true)
            } else { // scroll down
                setShown(false)
            }
            lastScrollTop.current = currentScrollTop;
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
```

4. styled-components接收props来变换显示css，但传递的props不能写死，要动态写如下：
```
    <StyledHeader isShown={isShown}>
        // ...
    </StyledHeader>
```

5. 想要用useLayoutEffect获取屏幕宽度，resize的导航，这咋整？

6. Z index在postion是relative的元素上也是有作用的。it only works on positioned elements ( position:absolute , position:relative , or position:fixed)

7. css3的一些没用过的属性 width: min(75vw, 400px); font-size:clamp(var(--fz-sm),5vw,var(--fz-md)), width: max-content

8. 在nextjs中给body添加className。结合react的context api 和nextjs的特有方法
   
```
    // 首先创建context目录，子目录可以放置多个context，然后专门通过一个index.ts导出
    import { createContext, useContext } from "react";

    export interface MenuContextInterface {
        open: boolean,
        handleMenuSwitch: () => void
    }

    const MenuContext = createContext<MenuContextInterface | null>(null);

    export const useMenuContext = () => useContext(MenuContext);

    export default MenuContext;

    // 在_app.tsx引入，并创建MenuContext的Provider包裹组件
    import { MenuContext } from "context"

    export default function App({ Component, pageProps }: AppProps) {
        const [open, setOpen] = useState<boolean>(false);

        const handleMenuSwitch = () => {
            setOpen(!open);
        }

        // 在这里对body的类型进行更换
        useEffect(() => {
            if (open) {
                document.body.classList.add('blur')
            } else {
                document.body.classList.remove('blur')
            }
        }, [open])

        return (
            <ThemeProvider theme={theme}>
                // 传入value给MenuContext
                <MenuContext.Provider value={{
                    open,
                    handleMenuSwitch
                }}>
                    <GlobalStyle />
                    <Header />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </MenuContext.Provider>
            </ThemeProvider>
        );
    }

    // 在子组件用useContext，进行交互的时候触发事件
    import { MenuContextInterface, useMenuContext } from 'context'

    const AsideMenu: FC<{}> = () => {

        // 这里进行类型断言，不然会解构报错，说null上面不存在这些属性
        const { open, handleMenuSwitch } = useMenuContext() as MenuContextInterface;

        return (
            <AsideWrapper>
                <MobileIcon>
                    {!open && <RiMenuLine onClick={handleMenuSwitch} onTouchEnd={handleMenuSwitch} />}
                    {open && <RiCloseLine onClick={handleMenuSwitch} onTouchEnd={handleMenuSwitch} />}
                </MobileIcon>

                <StyledAsideMenu isOpen={open as any as boolean}>
                    <Links column>
                        {
                            navs.map(nav => <Link href={nav.link} key={nav.link}>
                                <StyledLink>{nav.title}</StyledLink>
                            </Link>)
                        }
                    </Links>
                </StyledAsideMenu>

            </AsideWrapper>
        )
    }

```

9. 在work-experience这个模块，小屏的时候需要把年份横向铺开并且可以scroll，高亮的bar也需要显示。但是如果我在最外层包一个wrapper，给它overflow-x:auto，那么无论我设置bar的z-index是多少，都会被遮挡。结构如下：
```
    wrapper -- postion:relative; overflow: auto
        ul -- display:flex; flex-direction:row 在ul上给border-bottom也是不行的。要放在内部的元素上，每个设置border-bottom
            li
        bar -- position: absolute。z-index多少的都没用
    wrapper 
```

以上改为下面

```
    wrapper -- position: relative; z-index: 3; overflow: auto; width: 100%这个属性也是很重要的。和最外面这个section的宽度一样。等于是比max-content要小的，这样才有scroll的效果。如果是max-content，那么会被body的overflow:hidden给限制住不能scroll
        tabButton -- border-bottom 在每一个元素上设置border-bottom
        tabButton -- border-bottom 如上
        tabButton -- border-bottom 如上

        bar -- width: tabButton的宽，height:2px; transform: translateX: index * tabButton宽
    wrapper
```

10. 在接入sanity之后，想到的改进策略是在index page页面getServerSideProps获取包含所有内容信息的，不需要一个个去调接口

11. input框的autofill样式和手动输入不一致，解决办法：
```
        ::placeholder {
            color: var(--main-color);
        }
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active  {
            -webkit-box-shadow: 0 0 0px 1000px var(--background) inset;
            -webkit-text-fill-color: var(--nav-color) !important;
        }
```