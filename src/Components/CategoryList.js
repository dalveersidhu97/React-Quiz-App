import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import useHttp from "../hooks/use-http";
import classes from './CategoryList.module.css';

const CategoryList = () => {
    const navigate = useNavigate();
    const {sendRequest, data, isLoading, error} = useHttp("https://opentdb.com/api_category.php");

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <div className="w3-container w3-white w3-margin w3-padding-large">
      <div className="w3-center w3-row">
          
          {isLoading && <h3>...Loading</h3>}

          {error && <h3>{error.message}</h3>}

          {!error && !isLoading &&
            <Fragment>
                <h3>Categories</h3>
                <p>Choose a category and take the quiz!</p>

                {data && data.trivia_categories.map(category => 
                    <div className=" w3-col m3 w3-padding" key={category.id} onClick={()=>{navigate('../categories/'+category.id)}}>
                        <div className={classes.card + " w3-card w3-round w3-white w3-padding"}>
                            <h4 className="w3-center">{category.name.split(':')[1] || category.name.split(':')[0]}</h4>
                        </div>
                    </div>
                )}
            </Fragment>
          }

      </div>
      <br />
      <br />
    </div>
  );
};

export default CategoryList;
