import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Tooltip,
    Progress,
} from "@material-tailwind/react";

import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "../../data";

import { StreamChat } from 'stream-chat'
import { Chat, Channel, ChannelHeader, ChannelList, Window, MessageInput, MessageList, Thread, LoadingIndicator } from 'stream-chat-react'
import "stream-chat-react/dist/css/index.css";

import logo from '@img/profile-picture.jpg';



const apiKey = process.env.REACT_APP_STREAM_API_KEY;






const sort = { last_message_at: -1 };
const options = { state: true, watch: true, presence: true, limit: 10 };



export function Chathomefix() {
    const { user_id } = useParams();
    const [client, setClient] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userIdFromLocalStorage = localStorage.getItem("userbe_id");
        const nameFromLocalStorage = localStorage.getItem("name");

        setUser({
            id: userIdFromLocalStorage,
            name: nameFromLocalStorage,
            image: { logo }
        });
    }, [user_id]); 

   
    useEffect(() => {
        async function init() {
            if (!user) return; 

            const chatClient = StreamChat.getInstance(apiKey);

            await chatClient.connectUser(user, chatClient.devToken(user.id));
            const currentUser = chatClient.user;

            if (!isNaN(user_id)) {
                console.log(user_id);
                const userId = user_id;
    
                const existingChannel = chatClient.channel('messaging', { members: [user.id, userId] });
                const channelExists = await existingChannel.watch();
    
               
            }
            else if (isNaN(user_id)){

            }
    
            setClient(chatClient);
        }
        init();

        if (client) {
            return () => client.disconnectUser();
        }

    }, [user, user_id, client])

    async function handleContact() {
        if (!client) return;

        const userId = '30'; 
        const channel = client.channel('messaging', { members: [user.id, userId] });
        await channel.watch();
    }

    if (!client) {
        return <LoadingIndicator />;
    }

    const filters = { type: 'messaging', members: { $in: [user.id] } };

    return (
        <div className="h-72">
            <div>
                <button onClick={handleContact}>Contactar</button>
            </div>
            <div>
                <Chat client={client} theme={'messaging light'}>
                    <ChannelList
                        filters={filters}
                        sort={sort}
                        options={options} showChannelSearch
                    />
                    <Channel>
                        <Window>
                            <ChannelHeader />
                            <MessageList />
                            <MessageInput focus />
                        </Window>
                        <Thread />
                    </Channel>
                </Chat>
            </div>
        </div>
    );
}

export default Chathomefix;


