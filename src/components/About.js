import React from "react";
import { Collapsible, Icon, CollapsibleItem } from "react-materialize";

function About() {

    return (

        <div style={{marginTop:"5%", marginBottom:"10%"}}>
            <Collapsible
                accordion
                popout
            >
                <CollapsibleItem
                    expanded={false}
                    header="Love story."
                    icon={<Icon>filter_drama</Icon>}    
                    node="div"
                >
                    Love means never having to say you’re sorry
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header="Braveheart"
                    icon={<Icon>place</Icon>}
                    node="div"
                >
                   They may take our lives, but they’ll never take our freedom!
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header="The Godfatther"
                    icon={<Icon>whatshot</Icon>}
                    node="div"
                >
                    Keep your friends close, but your enemies closer.
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header="The Sisterhood of the Traveling Pants"
                    icon={<Icon>whatshot</Icon>}
                    node="div"
                >
                    Sometimes it’s easier to be mad at the people you trust because you know that they’ll always love you no matter what you say.
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header="One tree hill"
                    icon={<Icon>whatshot</Icon>}
                    node="div"
                >
                    I’m tired of feeling bad. I’d rather feel nothing. It’s better, it’s easier.
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header="Pirates of the Carribean"
                    icon={<Icon>whatshot</Icon>}
                    node="div"
                >
                    Close your eyes and pretend it’s all a bad dream. That’s how I get by.
                </CollapsibleItem>
            </Collapsible>
        </div>
    )
}

export default About;