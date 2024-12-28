'use client'
import NormalRow from "./NormalRow";
import EditableRow from "./EditableRow";
import { useState } from "react";

function SingleRow({ item }) {
    const { 'ID Student': id, 'Mark': mark, 'Weight': weight, 'ID Teacher': teacher, 'ID Subject': subject, 'Date of issue': date } = item;
    const [editable, setEditable] = useState(false);

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

export default SingleRow