import TITLE from './TITLE.jsx'

function TITLEGROUP (){
	let arr = ["pen",'pencil']
    return (
        <div>
        < TITLE heading="pen" price={54646} feat={arr}/>
< TITLE heading="pencil" price = {656565}/>
< TITLE heading="pen" />
</div>
        );
}
export default TITLEGROUP;