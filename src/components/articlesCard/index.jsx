import { useLocation } from 'react-router-dom';
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

    const articlesDescription = articlesData.map(articles => {
        return articles.description
    })

    const articlesEntretien = articlesData.map(articles => {
        return articles.entretien
    })
    
    return(
         <div class="articles">
             <div class="articlesCard">
                <img src={articlesSrc} alt={articlesName} />
             </div>
             <div>
                <p>{articlesDescription}</p> <br /><hr /><br />
                <p>{articlesEntretien}</p>
             </div>
         </div>
    )
}