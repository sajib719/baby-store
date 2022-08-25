import styled from "styled-components";
import { media } from "../../../styles/responsive";

export const StyledHeaderMiddle = styled.header`

    .headerWrap{
        display: flex;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        padding-top: 14px;
        min-height: 70px;
        ${media.down("sm")}{
            min-height: 50px;
        }

        .headerInner{
            display: flex;
            column-gap: 14px;
            margin: 0 calc(-1 * 14px);
            align-items: center;
            flex-shrink: 0;
        }
        
    }
    .headerLeft{
        /* mobile menu bar icon design here */
        .mobileMenuBar{
            /* padding: 0 14px; */
            margin: 0 14px;
            padding: 0;
            display: flex;
            align-items: center;
            position: relative;
            cursor: pointer;
            line-height: 1;
            display: none;
            ${media.down("xl")}{
                display: block;
            }
            .menuBarIcon{
                color: #000;
                svg{
                    position: relative;
                    z-index: 2;
                    display: block;
                    /* vertical-align: middle; */
                }
            }
        }

        /* mobile menu bar icon design here */



        .headerSearchForm{
            padding: 0 14px;
            ${media.down("md")}{
                display: none;
            }
        }
        
        form{
            position: relative;
        }
        .searchInput{
            padding: 3px 45px 3px 18px;
            position: relative;
            flex-grow: 1;
            padding-right: 45px;
            color: #000;
            border: 1px solid #d2d2d2;
            background-color: transparent!important;
            box-shadow: none!important;
            outline: none;
            min-height: 45px;
            border-radius: 23px;
            width: 270px;
            ${media.down("xl")}{
                width: 209px;
            }
        }
        button{
            position: absolute;
            top: 0;
            right: 0;
            min-width: 45px;
            height: 45px;
            line-height: 45px;
            padding: 0;
            border: 0;
            background-color: transparent;
            span{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                width: 22px;
                height: 22px;
            }
            svg{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
            
        }
    }
    .headerCenter{
        .headerCenterInner{
            margin-left: -144px;
            ${media.down("lg")}{
                margin-left: 0;
            }
        }
        a{
            padding: 5px 0;
            img{
                width: 169px;
                height: 44px;
                ${media.down("lg")}{
                    width: 145px;
                    height: 38px;
                }
                ${media.down("sm")}{
                    width: 120px;
                    height: 32px;
                }
            }
        }
    }
    .headerRightInner{
        display: flex;
        align-content: center;
        justify-content: flex-end;
        align-items: center;

        .SearchIcon{
            display: none;
            ${media.down("md")}{
                display: block;
            }
        }
        .loginIcon{
            ${media.down("md")}{
                display: none;
            }
        }
        .wishListIcon{
            ${media.down("md")}{
                display: none;
            }
        }

        a{
            padding: 0 14px;
            color: #000;
        }
        

        .headerRightImg{
            transition: all .25s cubic-bezier(.645,.045,.355,1);
            &:hover{
                opacity: .5;
                
            }
        }

        .headerRightIcon{
            position: relative;
            .iconBadge{
                padding: 2px 8px;
                background-color: red;
                font-weight: 700;
                font-size: 12px;
                top: -11px;
                right: -15px;
                position: absolute;
                background-color: #e1927f;
                color: #fff;
                border-radius: 50%;
            }
        }

        .headerRightLink{
            position: relative;
            .subMenu{
                margin-top: -5px;
                padding: 7px 10px;
                font-size: 14px;
                line-height: 14px;
                border-radius: 3px;
                position: absolute;
                top: 100%;
                left: 50%;
                background-color: #000;
                color: #fff;
                visibility: hidden;
                white-space: nowrap;
                transform: translateX(-50%);
                box-shadow: 4px 4px 8px rgb(0 0 0 / 30%);
                transition: all .25s cubic-bezier(.645,.045,.355,1);

            }

            &:hover{
                .subMenu{
                    visibility: visible;
                    margin-top: 0;

                }
            }
        }
    }

    .cartPopup{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9999999;
        background: rgba(0,0,0,.5);
    }
    .openCartPopup{
        visibility: visible;
        opacity: 1;
        .inner{
            transform: translateX(0);
        }
    }
    .closeCartPopup{
        visibility: hidden;
        opacity: 0;
        .inner{
            transform: translateX(100%);
        }
    }
        .inner{
            position: relative;
            height: 100%;
            max-width: 90%;
            text-align: left;
            transition: all .3s;
            cursor: default;
            float: right;
            width: 450px;
            background: #fff;
            box-shadow: 0 0 10px rgb(0 0 0 / 5%);
            .closeIcon{
                position: absolute;
                top: 5px;
                right: 5px;
                font-size: 24px;
                line-height: 1;
                height: 40px;
                width: 40px;
                justify-content: center;
                z-index: 1;
            }

        }
        .cartPopupContent{
            .cartHeader{
                padding: 26px 24px 28px 24px;
                .h3{
                    font-size: 24px;
                    font-weight: 500;
                }
                .countDownMessage{
                    margin-top: 8px;
                    color: #000;
                    font-size: 16px;
                    .timer{
                        display: inline-block;
                        font-weight: 500;
                    }
                }
                .cartGoalText{
                    margin: 10px 0;
                }
                .progressBar{
                    position: relative;
                    .progressBarWrap{
                        position: relative;
                        height: 6px;
                        margin: 0 12px;
                    }
                    .progressBarRol{
                        position: relative;
                        border-radius: inherit;
                        height: 100%;
                        max-width: 100%;
                    }
                    .progressBarRol::after{
                        position: absolute;
                        content: "";
                        top: 0;
                        left: -13px;
                        right: -13px;
                        height: 100%;
                        border-radius: 23px;
                        background: #f7f7f7;
                    }
                    .progressBarIcon{
                        position: absolute;
                        top: 50%;
                        right: 0;
                        left: 0;
                        transform: translate(-50%,-50%);
                        width: 26px;
                        height: 26px;
                        background: #fff;
                        color: #e1927f;
                        border: 1px solid #e1927f;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                        z-index: 1;
                    }
                }
            }
            .cartBody{
                padding: 0 24px;
                .emptyCartMessage{
                    display: flex;
                    align-content: center;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    img{
                    width: 240px;
                    height: 210px;
                    }
                    .h2{
                        font-size: 18px;
                        line-height: 24px;
                        margin-bottom: 10px;
                    }
                    .description{
                        width: 100%;
                        text-align: center;
                        color: #666666;
                        font-size: 16px;
                    }
                }
                .cartBTN{
                    margin-top: 20px;
                    text-align: center;
                    a{
                        font-size: 16px;
                        font-weight: 500;
                        line-height: 43px;
                        color: #fff;
                        background-color: #e1927f;
                        border: 1px solid #e1927f;
                        padding: 0 35px;
                        height: 45px;
                        border-radius: 23px;
                        display: inline-block;
                        cursor: pointer;
                        transition: all .25s cubic-bezier(.645,.045,.355,1);
                        &:hover{
                            box-shadow: 0 0 0 0.2rem #E1927F; 
                        }
                    }
                }
                
            }
            .cartFooter{
                margin-top: 20px;
                padding: 10px 24px 30px;
                background: #f7f7f7;
                box-shadow: 0 0 10px 0 hsl(0deg 0% 51% / 20%);

                .footerActions{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: -10px;
                    a{
                        display: inline-flex;
                        flex-flow: column;
                        align-items: center;
                        text-align: center;
                        font-size: 15px;
                        font-weight: 500;
                        flex: 1;
                        position: relative;
                        padding: 10px;
                        color: #000;
                    }
                    .separator::before{
                        content: "";
                        height: 26px;
                        width: 1px;
                        display: block;
                        background: #dedede;
                        position: absolute;
                        left: 0;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                }
                .cartTable{
                    width: 100%;
                    
                    tr{
                        display: flex;
                        align-items: center;
                        min-height: 30px;
                        th{
                            flex-shrink: 0;
                            margin: 0 5px 0 0;
                        }
                        .subTotal{
                            font-size: 16px;
                            color: #666;
                            font-weight: 400;
                        }
                        .total{
                            font-size: 18px;
                            color: #000;
                            font-weight: 500;
                        }
                        td{
                            flex-grow: 1;
                            text-align: end;
                            color: #000;
                            .subTotalAmount{
                                font-size: 15px;
                                color: #000;
                            }
                            .totalAmount{
                                font-size: 18px;
                                font-weight: 500;
                                color: #000;
                            }
                        }
                    }
                    .border{
                        margin-top: 10px;
                        padding-top: 8px;
                        border-top: 1px solid #eee;
                    }
                }
                .cartFooterBtn{
                    margin-top: 10px;
                    .btn{
                        display: inline-block;
                        width: 100%;
                        padding: 0 20px;
                        transition: all .25s cubic-bezier(.645,.045,.355,1);
                        padding: 0 35px;
                        height: 45px;
                        line-height: 43px;
                        outline: none;
                        color: #fff;
                        border: 1px solid #e1927f;
                        background-color: #e1927f;
                        border-radius: 23px;
                        font-size: 16px;
                        font-weight: 500;
                        cursor: pointer;
                        text-align: center;
                        &:hover{
                            box-shadow: 0 0 0 0.2rem #E1927F; 
                        }
                    }
                    .linkBtn{
                        width: 100%;
                        margin-top: 10px;
                        position: relative;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                        line-height: 23px;
                        white-space: nowrap;
                        cursor: pointer;
                        max-width: 100%;
                        user-select: none;
                        color: #000;
                        font-size: 16px;
                        font-weight: 500;
                        .btnWrapper{
                            position: relative;
                            padding: 2px 0;
                            display: flex;
                            align-items: center;
                            &::after{
                                content: "";
                                position: absolute;
                                left: 0;
                                height: 1px;
                                background-color: rgba(0,0,0,.25);
                                transform-origin: left;
                                transform: scaleX(1) translateZ(0);
                                transition: transform .6s cubic-bezier(.165,.84,.44,1);
                                bottom: 0;
                                width: 100%;
                            }
                                &:hover::after{
                                    transform-origin: right;
                                    transform: scaleX(0) translateZ(0);
                                }
                        }

                    }
                }
            }
        }

    .popupSearch{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999999;
        background: rgba(0,0,0,.6);
        transition: all .25s cubic-bezier(.645,.045,.355,1);
    }
    .openSearchBar{
        opacity: 1;
        visibility: visible;
        .inner{
            transform: translateX(0);
        }
    }
    .closeSearchBar{
        opacity: 0;
        visibility: hidden;
        .inner{
            transform: translateX(100%);
        }
    }
    .searchInner{
        position: relative;
        max-height: calc(100vh - 55px);
        transition: all .3s;
        cursor: default;
        background: #fff;
        width: 100%;
        padding: 2rem 0;
        .closeIcon{
            position: absolute;
            top: 0;
            right: 0;
            z-index: 9;
        }
        .popupSearchContainer{
            margin: 0 92px;
            padding: 0 50px;
        }
        .popupContent{
            display: grid;
            grid-template-columns: 3fr 6fr 3fr;
            align-content: center;
            align-items: center;
            .logo{
                img{
                    width: 145px;
                    height: 38px;
                }
            }
            .searchBar{
                form{
                    position: relative;
                    .searchField{
                        width: 100%;
                        padding: 3px 18px;
                        min-height: 45px;
                        outline: none;
                        border-radius: 23px;
                        border: 1px solid #d2d2d2;
                        color: #d2d2d2;
                    }
                    button{
                        position: absolute;
                        top: 0;
                        right: 0;
                        min-width: 45px;
                        height: 45px;
                        line-height: 45px;
                        padding: 0;
                        border: 0;
                        border-radius: 23px;
                        background: none;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        svg{
                            color: #666;
                        }
                    }
                }
            }
        }
        .popularKye{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 9px;
            .label{
                color: #666;
                font-size: 16px;
                padding-right: 6px;
            }
            a{
                text-decoration: underline;
                margin-right: 12px;
                color: #000;
                transition: all .25s cubic-bezier(.645,.045,.355,1);
                &:hover{
                    opacity: .5;
                }
            }
        }
    }
    
`