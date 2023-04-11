import { useLocation } from 'react-router-dom';
import Card from '../card';
import { ArticlesData } from '../../data/articlesData';

export default function ArticlesCard() {


    //récupération de l'url afin de filtrer ArticlesData et récupéré les données personnalisé par url

    let location = useLocation();
    const UrlName = location.pathname;
    const realUrlName = UrlName.substring(10);
    let articlesData = ArticlesData.filter(function (articles) {
        return articles.url === realUrlName
      });

    const articlesName = articlesData.map(articles => {
        return articles.name
    })

    const articlesSrc = articlesData.map(articles => {
        return articles.src
    })

    const descritptionSrc = articlesData.map(articles => {
        return articles.description
    })
    
    return(
         <div class="votingCard">
            <Card name={articlesName} src={articlesSrc} description={descritptionSrc}/>
         </div>
    )
}