import './ProfileCard.css'
import homer from './homer.jpg'

export default function ProfileCard(props) {
    return(
        <div id="single-article-1" class="single-article">
            <div id="card-front-1" class="front-card tb-card">
                <img src={homer} className="profile-image" />
                <div class="single-content">
                    <div class="card-middle">
                        <h1>John Smith</h1>
                        <p class="team-p1">Cras tincidunt ipsum lectus, id malesuada dui blan. Vivamus vel lacus. Nivamus vel lacus nisi... </p>
                    </div>
                    <div class="card-bottom">
                        <div class="card-email">
                            Name@embrave.ca
                        </div>
                        <div class="card-icon profile-trigger" data-id="single-article-1" >
                            <i class="fa fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}