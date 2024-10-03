import { GrInfo } from "react-icons/gr";
import GetTokenBtn from "./GetTokenBtn";
import BrowserOnly from "@docusaurus/BrowserOnly";


export default function AccessibleAgents({
    handleInputToken,
    token,
    auth,
    head=false,
    branch=false,
    agent=false,
    customer=false,
}) {

    

    return <BrowserOnly>{
        () => (
            <div className="theme-admonition theme-admonition-note admonition_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-Layout-styles-module alert alert--secondary">
                <div className="admonitionHeading_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-Layout-styles-module">

                    <span>※ 열람 대상은 다음과 같습니다.</span>
                    <div style={{float:'right'}}>
                        <GetTokenBtn inputToken={handleInputToken} token={token} auth={auth} />
                    </div>
                </div>
                <div className="admonitionContent_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-Layout-styles-module">
                    <ul className="contains-task-list containsTaskList_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Ul-styles-module">
                        <li className="task-list-item">
                            <input type="checkbox" disabled checked={head} /> 
                            <strong> 본사</strong>
                            </li>
                        <li className="task-list-item">
                            <input type="checkbox" disabled checked={branch} /> 
                            <strong> 법인</strong>
                        </li>
                        <li className="task-list-item">
                            <input type="checkbox" disabled checked={agent} /> 
                            <strong> 대리점</strong>
                        </li>
                        <li className="task-list-item">
                            <input type="checkbox" disabled checked={customer} /> 
                            <strong> 고객</strong>
                        </li>
                    </ul>
                </div>
            </div>
        )}
    </BrowserOnly>
};