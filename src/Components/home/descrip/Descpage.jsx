import React from "react";
import { useSelector } from "react-redux";
import ReactImageMagnify from 'react-image-magnify';
import CheckPop from "./CheckPop";
import styles from "./descpage.module.css";



const Descpage = () => {
  
  const descData = useSelector((state) => state.Data.descriptionData);
  console.log(descData);


  return (
    <div className={styles.container}>
    
    <div className={styles.descpagemaindiv}>
      <div className={styles.reactMg}>
    <ReactImageMagnify {...{
      smallImage: {
          alt: 'Wristwatch by Ted Baker London',
          isFluidWidth: true,
          src:descData.thumbnail,
      },
      largeImage: {
          src: descData.thumbnail,
          width: 1100,
          height: 500
      }
  }} />
  </div>

      <div className={styles.descdetaildiv}>
        <h3 className={styles.title}>{descData.title}</h3>
       
        <h1 className={styles.price}>Price :  {descData.price.raw}</h1>
        <p >{descData.shipping}</p>
        <p className={styles.cond}>{descData.condition}</p>
        {/* <p>{descData.extensions[0]}</p> */}
        <select className={styles.selectTag}>
          <option value="size">Size</option>
          <option>xx-small</option>
          <option>x-small</option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
          <option>X-Large</option>
        </select>
        <br />
        <br />
       

        <select className={styles.selectTag}>
          <option>Purple Mellow Gingham</option>
          <option>Grey Heather</option>
          <option>Black </option>
          <option>Brown Brownie Animal Prints</option>
          <option>Black Infinity</option>
        </select><br /><br />

        <div>
          <div>Delivery</div>
          <CheckPop data={descData} />
          <a href="#">Add to Wish List</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Descpage;


