'use client'
import NormalRow from "./NormalRow";
import EditableRow from "./EditableRow";
import { useState } from "react";

function SingleRow({ item }) {
    const { 'ID Student': id, 'Mark': mark, 'Weight': weight, 'ID Teacher': teacher, 'ID Subject': subject, 'Date of issue': dateObject, 'ID Mark': markID } = item;
    //switch editable or read-only (normal)
    const [editable, setEditable] = useState(false);

    //convert date object to string format
    const date = dateObject.toUTCString();

    const TriggerEdit = () => {
        setEditable((prev) => !prev);
    }

    if (editable) {
        return <EditableRow
            id={id}
            mark={mark}
            weight={weight}
            teacher={teacher}
            subject={subject}
            date={date}
            TriggerEdit={TriggerEdit}
            gradeID={markID}
        />
    }

    return <NormalRow
        id={id}
        mark={mark}
        weight={weight}
        teacher={teacher}
        subject={subject}
        date={date}
        TriggerEdit={TriggerEdit}
    />
}

export default SingleRow;