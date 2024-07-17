 
import './TITLE.css';

function TITLE({ heading, price = 3433, feat = [] }) {
    let styles={backgroundColor: price>50000?"yellow":""} ;
        return (
        <div className="TITLE" style= {styles}>
            <h2>{heading}</h2>
            <ul>{feat.map((item) => <li>{item}</li>)}</ul>
            <h3>{price}</h3>
            {price>50000&&<p>good</p>}
        </div>
    );
}

export default TITLE;

 