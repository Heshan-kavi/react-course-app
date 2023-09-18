import { useSelector } from "react-redux";


function ConfirmationPage(){

    const favouriteList = useSelector((state) => state.favourite.favouriteList);

    return (
        <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Address</th>
                    <th>Description</th>
                    <th>image</th>
                </tr>
                </thead>
                <tbody>
                {favouriteList.map((val) => {
                    return (
                        <tr key={val.id}>
                            <td>{val.title}</td>
                            <td>{val.address}</td>
                            <td width="1000px">{val.description}</td>
                            <td><img src={val.image} alt="React Image" width="150px"/></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
    )
}

export default ConfirmationPage;