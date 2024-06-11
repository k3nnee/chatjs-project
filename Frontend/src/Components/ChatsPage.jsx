import { PrettyChatWindow } from "react-chat-engine-pretty";

function ChatsPage(props){
    return (
        <div className = "background"> Chats
            <PrettyChatWindow projectId={"21a50f9b-97e9-4e26-8579-dfc8866a442e"}
                              username={props.user.username}
                              secret={props.user.secret}
            />
        </div>
    );
}

export default ChatsPage;