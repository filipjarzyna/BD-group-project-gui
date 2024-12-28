
export const rowStructure = (student, mark, weight, teacher, subject, date) => {
    return {
        'id student': student,
        mark: mark,
        weight: weight,
        'id teacher': teacher,
        'id subject': subject,
        'date': date
    }
}