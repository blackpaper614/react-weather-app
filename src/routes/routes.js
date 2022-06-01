import MainPage from "../pages/MainPage";
import Detail from "../pages/Detail";

let routes = [
    {
        path: "/main",
        component: MainPage,
        exact: true,
        meta: {
            title: "首页",
            key: ["mainpage"],
        }
    }, {
        path: "/detail",
        component: Detail,
        exact: true,
        meta: {
            title: "天气详情",
            key: ["detailinfo"]
        }
    }
]

export default routes