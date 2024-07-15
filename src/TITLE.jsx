 
import './TITLE.css';

function TITLE({ heading, price = 3433, feat = [] }) {
    const list = feat.map((item) => <li>{item}</li>);
    console.log(list)
    return (
        <div className="TITLE">
            <h2>{heading}</h2>
            <ul>{list}</ul>
            <h3>{price}</h3>
        </div>
    );
}

export default TITLE;

 