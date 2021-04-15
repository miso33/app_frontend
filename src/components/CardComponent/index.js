import React from "react";
import {Card, CardContent} from '@material-ui/core';

export default function CardComponent(props) {
    return (
        <Card className={props.cardClass || ""}>
            <CardContent className={props.cardContentClass || ""}>
                {props.content || ""}
            </CardContent>
        </Card>
    );

}

