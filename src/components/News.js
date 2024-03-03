import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Deadline"
            },
            "author": "Bruce Haring",
            "title": "She's On The Way: Taylor Swift Flying To Super Bowl To Watch Travis Kelce's Big Day - Deadline",
            "description": "Taylor Swift is in the air and expected to make the Super Bowl.",
            "url": "http://deadline.com/2024/02/taylor-swift-flying-super-bowl-1235821287/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2024/02/GettyImages-1970250659-e1707242424930.jpg?w=1024",
            "publishedAt": "2024-02-10T17:09:00Z",
            "content": "Only Santa Claus on Christmas Eve has a flight that's been more eagerly watched.\r\nTaylor Swift has reportedly been rushed to a plane in Japan following her concert there. She now faces a flight that … [+1065 chars]"
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Dave McMenamin",
            "title": "Source - Spencer Dinwiddie to join Lakers after clearing waivers - ESPN",
            "description": "Spencer Dinwiddie will sign with the Lakers when he clears waivers, a source familiar with his plans confirmed to ESPN.",
            "url": "https://www.espn.com/nba/story/_/id/39497469/source-spencer-dinwiddie-join-lakers-clearing-waivers",
            "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0204%2Fr1286911_1024x576_16%2D9.jpg",
            "publishedAt": "2024-02-10T16:55:00Z",
            "content": "LOS ANGELES -- Free agent guard Spencer Dinwiddie will sign with the Los Angeles Lakers when he clears waivers, a source familiar with his plans confirmed to ESPN on Saturday.\r\nDinwiddie, 30, was tra… [+2461 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TOI World Desk",
            "title": "Oregon reports first human case of Bubonic plague in over 8 years; likely transmitted from pet cat - Times of India",
            "description": "US News: Oregon reports its first human case of Bubonic plague in over 8 years, likely transmitted from a pet cat. Learn more about the disease, its symptoms, and treatment. Find out how common the disease is in the United States and the areas it is typically…",
            "url": "https://timesofindia.indiatimes.com/world/us/oregon-reports-first-human-case-of-bubonic-plague-in-over-8-years-likely-transmitted-from-pet-cat/articleshow/107588201.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-107588231,width-1070,height-580,imgsize-802931,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-02-10T16:35:00Z",
            "content": "Beauty lessons to learn from the very beautiful Nita Ambani"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Perry Stein",
            "title": "Some experts question putting memory details in Hur's Biden report - The Washington Post",
            "description": "Experts said relying on special counsels has upended a central Justice Department principle: don't prejudice the public against people who aren't charged.",
            "url": "https://www.washingtonpost.com/national-security/2024/02/10/biden-special-counsel-james-comey-clinton/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5YUWMUZQK3JVWFXLYZ5YMKPVPU_size-normalized.JPG&w=1440",
            "publishedAt": "2024-02-10T16:33:50Z",
            "content": "The conclusion laid out in special counsel Robert K. Hurs final report was straightforward: Joe Bidenmishandled classified materials, though there was not enough proof that he intended to break the l… [+9984 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Variety"
            },
            "author": "J. Kim Murphy",
            "title": "Box Office: 'Lisa Frankenstein' Lands Quiet Opening Day Behind 'Argylle' - Variety",
            "description": "'Lisa Frankenstein' landed a soft opening at the domestic box office behind 'Argylle,' as Super Bowl weekend sends theatrical business grinding to a halt.",
            "url": "https://variety.com/2024/film/box-office/lisa-frankenstein-opening-day-argylle-drops-1235906434/",
            "urlToImage": "https://variety.com/wp-content/uploads/2024/02/lisa-frankenstein_.jpg?w=999&h=562&crop=1",
            "publishedAt": "2024-02-10T16:24:00Z",
            "content": "It isn't alive, unfortunately. “Lisa Frankenstein” is facing a quiet opening at the domestic box office after earning $1.7 million from 3,144 locations on its opening day, including $700,000 in Thurs… [+2974 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Janelle Ash",
            "title": "'Rocky' star Carl Weathers' Super Bowl ad being changed following death - Fox News",
            "description": "\"Rocky\" actor Carl Weather's Super Bowl ad is being tweaked in light of his death. The late actor was set to make an appearance in FanDuel's ad with Rob Gronkowski.",
            "url": "https://www.foxnews.com/entertainment/rocky-star-carl-weathers-super-bowl-ad-changed-following-death",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/02/carl-weathers.jpg",
            "publishedAt": "2024-02-10T16:19:00Z",
            "content": "\"Rocky\" actor Carl Weathers' FanDuel Super Bowl ad is being changed after the sudden news of his death. On Feb. 1, the actor \"died peacefully in his sleep\" at 76, his family shared.\r\nIn January, the … [+5249 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "Patricio Chile",
            "title": "'No survivors' after helicopter crashes in Mojave Desert: Sheriff - ABC News",
            "description": "The crash was reported around 10 p.m. Friday near Nipton, California.",
            "url": "https://abcnews.go.com/US/survivors-helicopter-crash-mojave-desert-sheriff/story?id=107125291",
            "urlToImage": "https://i.abcnewsfe.com/a/c76e1826-154b-439e-b8d2-c0cbc662f924/police-tape-cars-gty-jt-230510_1683751598051_hpMain_16x9.jpg?w=1600",
            "publishedAt": "2024-02-10T16:11:25Z",
            "content": "Authorities said they have not been able to locate any survivors after a helicopter crashed in the Mojave Desert in California Friday night.\r\nThe crash was reported shortly after 10 p.m., a statement… [+675 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": null,
            "title": "Five-year-old Palestinian girl found dead after being trapped in car under Israeli fire - CNN",
            "description": "A 5-year-old Palestinian girl who was trapped in a car with her dead relatives after it came under Israeli fire in Gaza last month has been found dead.",
            "url": "https://www.cnn.com/2024/02/10/middleeast/hind-rajab-death-israel-gaza-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/hind-rajab.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-02-10T16:02:00Z",
            "content": "A 5-year-old Palestinian girl who was trapped in a car with her dead relatives after it came under Israeli fire in Gaza last month has been found dead.\r\nOn January 29, Hind Rajab had been traveling i… [+2278 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "CORA LEWIS",
            "title": "Report: Wealth disparities by race grew during the pandemic despite income gains - Yahoo Finance",
            "description": "A strong performance in financial markets, particularly an outsize gain for the stock market in 2021, helped entrench existing trends of wealth inequality...",
            "url": "https://finance.yahoo.com/news/wealth-disparities-race-grew-during-150830365.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/h0vAO_5YJxbYObr.2OKsHw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap_finance_articles_694/46c4cdd0101fbfb9e7c98eeeb2b0d2ea",
            "publishedAt": "2024-02-10T15:08:30Z",
            "content": "NEW YORK (AP) A strong performance in financial markets, particularly an outsize gain for the stock market in 2021, helped entrench existing trends of wealth inequality during the pandemic, new data … [+4737 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Kuenssberg: Are the politics of climate change going out of fashion? - BBC.com",
            "description": "With net zero targets fast approaching, the debate is shifting to concerns about cost, says Laura Kuenssberg.",
            "url": "https://www.bbc.com/news/uk-politics-68261445",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/135D9/production/_132612397_laura_kuenssberg_wind_energy_3-nc.png",
            "publishedAt": "2024-02-10T15:00:48Z",
            "content": "By Laura KuenssbergPresenter, Sunday with Laura Kuenssberg\r\nWhat's in vogue? Not just Labour leader Sir Keir Starmer in this month's glossy mag, or news that \"discreet chic\" is back and flamboyant \"s… [+7121 chars]"
        },
        {
            "source": {
                "id": "financial-times",
                "name": "Financial Times"
            },
            "author": "Benjamin Parkin, Farhan Bokhari",
            "title": "Imran Khan's allies accuse Pakistan officials of vote rigging - Financial Times",
            "description": "Rival parties begin coalition talks after poll marred by delays, mobile blackouts and vote-tampering allegations",
            "url": "https://www.ft.com/content/be2925f4-8cb6-41fc-ae07-b00a6493014d",
            "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fwww.ft.com%2F__origami%2Fservice%2Fimage%2Fv2%2Fimages%2Fraw%2Fhttps%253A%252F%252Fd1e00ek4ebabms.cloudfront.net%252Fproduction%252F178505b7-04eb-4b7a-b311-6246dcab031d.jpg%3Fsource%3Dnext-article%26fit%3Dscale-down%26quality%3Dhighest%26width%3D700%26dpr%3D1?source=next-opengraph&fit=scale-down&width=900",
            "publishedAt": "2024-02-10T14:55:38Z",
            "content": "Imran Khans allies have accused Pakistani authorities of rigging the vote count in Thursdays election to block them from power after they achieved a stunning electoral success.\r\nCandidates loyal to K… [+4454 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slate Magazine"
            },
            "author": "Dahlia Lithwick, Mark Joseph Stern",
            "title": "The most galling thing about the Supreme Court's Trump ballot arguments. - Slate",
            "description": "The Supreme Court heard oral arguments Thursday in Trump v. Anderson, which challenges Donald Trump's ability to appear on the ballot in Colorado.",
            "url": "https://slate.com/news-and-politics/2024/02/supreme-court-trump-ballot-arguments-alito-yikes.html",
            "urlToImage": "https://compote.slate.com/images/1397f076-32da-42af-888d-a6759a9f0928.jpeg?crop=4225%2C2817%2Cx1%2Cy0&width=1560",
            "publishedAt": "2024-02-10T14:00:00Z",
            "content": "The Supreme Court heard oral arguments Thursday in Trump v. Anderson, which challenges Donald Trumps ability to appear on the ballot in Colorado. A group of voters brought the case under Section 3 of… [+5910 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "",
            "title": "Atlantic Ocean circulation nearing 'devastating' tipping point, study finds - CNN",
            "description": "CNN's Meteorologist Chad Myers looks at a new report that warns that key ocean currents could collapse, with devastating changes to our climate.",
            "url": "https://www.cnn.com/videos/world/2024/02/10/exp-chad-myers-atlantic-ocean-study-021005aseg1-cnni-world.cnn",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240210081232-exp-chad-myers-atlantic-ocean-study-021005aseg1-cnni-world-00002001.png?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-02-10T13:16:33Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Annika Kim Constantino",
            "title": "Weight loss drugs are still hard to find — but Novo Nordisk and Eli Lilly are trying to change that - CNBC",
            "description": "Novo Nordisk and Eli Lilly have given positive supply updates, aiming to reassure investors that they can continue to capitalize on the success of their drugs.",
            "url": "https://www.cnbc.com/2024/02/10/weight-loss-drugs-novo-nordisk-eli-lilly-are-tackling-supply-issues.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107364694-17062136162023-11-21t141914z_82196440_rc2oh4ah9cpp_rtrmadp_0_health-obesity-novo-nordisk.jpeg?v=1707513174&w=1920&h=1080",
            "publishedAt": "2024-02-10T13:00:01Z",
            "content": "Injection pens of Novo Nordisk's weight-loss drug Wegovy are shown in this photo illustration in Oslo, Norway, Nov. 21, 2023.\r\nThe insatiable demand for weight loss drugs is trouncing supply, leaving… [+8581 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "NAJIB JOBAIN, SAMY MAGDY",
            "title": "31 Palestinians killed in Israeli strikes in Rafah after Netanyahu says invasion there is inevitable - The Associated Press",
            "description": "A hospital official and AP journalists say Israeli airstrikes have killed at least 31 Palestinians in the southern Gaza city of Rafah. The strikes came hours after Israel's prime minister said he asked the military to plan for the evacuation of hundreds of th…",
            "url": "https://apnews.com/article/israel-hamas-war-news-02-10-2024-2d80dc890a5030757e2ae76684fa75da",
            "urlToImage": "https://dims.apnews.com/dims4/default/c8cfc13/2147483647/strip/true/crop/8383x4715+0+437/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1a%2Fc7%2F30566bcd42da83dbda4afa0ddbee%2F2cd3285d184243029e1d5d0abe4a3a27",
            "publishedAt": "2024-02-10T12:45:00Z",
            "content": "RAFAH, Gaza Strip (AP) Israeli airstrikes killed at least 31 Palestinians a third of them children in the southern Gaza city of Rafah on Saturday, hours after Israels prime minister said he asked the… [+5382 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Jarrett Bell",
            "title": "Kyle Shanahan's rise as NFL coaching great began with his father - USA TODAY",
            "description": "No one has gotten a closer look at the NFL ascension of San Francisco 49ers coach Kyle Shanahan than his father, Mike, a two-time Super Bowl winner.",
            "url": "https://www.usatoday.com/story/sports/nfl/columnist/bell/2024/02/10/kyle-shanahan-mike-super-bowl-58-san-francisco-49ers/72548826007/",
            "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/02/10/USAT/72548975007-gty-1968751918.jpg?crop=5810,3270,x0,y116&width=3200&height=1802&format=pjpg&auto=webp",
            "publishedAt": "2024-02-10T12:37:24Z",
            "content": "LAS VEGAS There's no sudden urge for Mike Shanahan to offer his son any grand, unsolicited advice this weekend that might help him get over the hump in Super Bowl 58. Kyle Shanahan has absorbed lesso… [+7810 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MMA Fighting"
            },
            "author": "Alexander K. Lee",
            "title": "UFC Vegas 86 predictions - MMA Fighting",
            "description": "Will Joe Pyfer continue his charge up the rankings or is Jack Hermansson poised to play the spoiler?",
            "url": "https://www.mmafighting.com/2024/2/10/24065760/ufc-vegas-86-predictions",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/lW7oF0T-QTbCwkS6co-_pIC8L4I=/0x0:3726x1951/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25276162/1410521621.jpg",
            "publishedAt": "2024-02-10T12:16:50Z",
            "content": "Its time for one of the middleweight-iest cards in UFC history. Get pumped!\r\nFour count em, four middleweight fights are scheduled for Saturdays UFC Vegas 86 card, including a headliner between longt… [+8137 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Nicholas McEntyre",
            "title": "Audio captures moment small plane loses both engines before crashing onto Florida highway, killing 2 - New York Post ",
            "description": "Air traffic controllers gave the plane the all-clear to land upon hearing the emergency call from the pilot.",
            "url": "https://nypost.com/2024/02/10/news/florida-plane-audio-reveals-moment-pilot-lost-both-engines-before-crashing-on-i-75-near-naples/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/02/newspress-collage-ozoyd7rwz-1707562849021.jpg?quality=75&strip=all&1707544931&w=1024",
            "publishedAt": "2024-02-10T12:13:00Z",
            "content": "Chilling audio captured the final moments when a small plane lost both its engines and crashed onto a busy Florida highway near a wealthy Naples enclave, killing two people aboard the aircraft on Fri… [+2938 chars]"
        }
    ]

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        };
    }
    
    render() {
        return (
            <div className='container my-2'>
                <h1>Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((article) => {
                        return <div className="col-md-4" key={article.url}>
                            <NewsItem title={article.title} description={article.description} imageUrl={article.urlToImage} url={article.url} />
                        </div>
                    })}

                </div>
            </div>
        )
    }
}

export default News
