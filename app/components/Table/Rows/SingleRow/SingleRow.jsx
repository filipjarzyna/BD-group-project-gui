'use client'
import NormalRow from "./NormalRow";
import EditableRow from "./EditableRow";
import { useState } from "react";

function SingleRow({ item }) {
    const { 'ID Student': student, 'Mark': mark, 'Weight': weight, 'ID Teacher': teacher, 'ID Subject': subject, 'Date of issue': dateObject, 'ID Mark': markID } = item;
    //switch between editable or read-only (normal)
    const [editable, setEditable] = useState(false);

    //convert date object to string format
    const date = dateObject.toUTCString();


    const TriggerEdit = () => {
        setEditable((prev) => !prev);
    }

    if (editable) {
        return <EditableRow
            student={student}
            mark={mark}
            weight={weight}
            teacher={teacher}
            subject={subject}
            date={date}
            TriggerEdit={TriggerEdit}
            markID={markID}
        />
    }

    return <NormalRow
        student={student} // when i pass {student} it works fine
        mark={mark}
        weight={weight}
        teacher={teacher}
        subject={subject}
        date={date}
        TriggerEdit={TriggerEdit}
    />
}

export default SingleRow;