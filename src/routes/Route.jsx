import Blog from "../pages/Blog";
import DetailBlog from "../pages/DetailBlog";
import DetailCategory from "../pages/DetailCategory";
import DetailProduct from "../pages/DetailProduct";
import ECommerce from "../pages/ECommerce";
import Forum from "../pages/Forum";
import GetStarted from "../pages/GetStarted";
import Home from "../pages/Home/Home";
import UploadArtikel from "../pages/UploadArtikel";
import Login from "../pages/Login";
import Register from "../pages/Register";

const routes =[
    {
        path : '/',
        element :<Home />
    },
    {
        path : '/get-started',
        element :<GetStarted />
    },
    {
        path : '/forum',
        element :<Forum />
    },
    {
        path : '/blog',
        element :<Blog />
    },
    {
        path : '/upload-artikel',
        element :<UploadArtikel />
    },
    {
        path : '/detail-blog',
        element :<DetailBlog />
    },
    {
        path : '/E-Commerce',
        element :<ECommerce />
    },
    {
        path : '/detail-category',
        element :<DetailCategory />
    },
    {
        path : '/detail-product',
        element :<DetailProduct />
    },
    {
        path : '/login',
        element :<Login />
    },
    {
        path : '/register',
        element :<Register />
    },
]

export default routes