import React from "react";

const About = () =>{
    return (
        <div className="bg-primary about">
            <div className="container">
                <div className="grid-parent">
                    <div className="about-content">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p className="lead">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
                        Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
                        and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
                        continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
                    </div>
                    <div className="double-image">                    
                        <img className="about-1" src="/images/Mario and Adrian A.jpg" alt="Mario and Adrian 1"></img>
                        <img className="about-2"  src="/images/Mario and Adrian B.jpg" alt="Mario and Adrian 2"></img>                    
                    </div>
                </div>
            </div>
        </div>
    )
};
export default About;