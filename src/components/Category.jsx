import { useParams } from "react-router-dom";

const Category = () => {

    const { slug } = useParams();
    return ( 
        <h1>{slug}</h1>
     );
}
 
export default Category;