import { useRouter } from "next/router"

const DetailsPage = () => {
    const router = useRouter();

    const newsId = router.query.newsId;

    //send fetch request based off of newsId

    return (
        <h1>{newsId}</h1>
    )
}

export default DetailsPage;