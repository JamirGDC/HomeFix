import React, { useEffect, useState } from "react";

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
// import 'stream-chat-react/dist/css/v2/index.css';



const apiKey = process.env.REACT_APP_STREAM_API_KEY;

// const user = {
//     id: '1',
//     name: 'Diego',
//     image: 'https://getstream.io/random_png/?id=golden-snowflake-9&name=golden+snowflake'
// }
const user = {
    id: '5',
    name: 'Sinthia',
    image: 'https://getstream.io/random_png/?id=golden-snowflake-9&name=golden+snowflake'
}





const filters = { type: 'messaging', members: { $in: [user.id] } };
const sort = { last_message_at: -1 };
const options = { state: true, watch: true, presence: true, limit: 10 };


export function Chathomefix() {

    const [client, setClient] = useState(null);

    useEffect(() => {
        async function init() {
            const chatClient = StreamChat.getInstance(apiKey);
            await chatClient.connectUser(user, chatClient.devToken(user.id));
            const currentUser = chatClient.user;

            // Modificar los permisos del usuario para asignar el rol de administrador
            await chatClient.partialUpdateUser({ id: user.id, set: { role: "admin" } })

            // const channel = chatClient.channel('messaging', 'react-talk', {
            //     name: 'General Chat',
            //     image: 'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
            //     members: [user.id],
            // });
            const channel = chatClient.channel('messaging', 'react-talk', {
                name: 'General aaaaa',
                image: 'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
                members: [user.id],
            });

            await channel.watch();

            setClient(chatClient);
        }
        init();

        if (client) {
            return () => client.disconnectUser();
        }

    }, [])
    if (!client) {
        return <LoadingIndicator />;
    }

    return (
        <div className="h-72" >
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
    );
}

export default Chathomefix;
