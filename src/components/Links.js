import {github, linkedin} from "../components/About"

function Links (prop) {
return(
    <div>
    <h3>Links</h3>
    <a href = {prop.git}>{prop.git}</a>
    <a href = {prop.link}>{prop.link}</a>
    
    </div>
    
)


}
export default Links