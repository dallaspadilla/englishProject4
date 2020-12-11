import React from 'react';
import AppMode from '../AppMode.js';
import FeedInterests from './FeedInterests.js';
import FeedSchool from './FeedSchool.js';

class FeedPage extends React.Component {

    render() {
      switch(this.props.mode) {
        case AppMode.FEED:
          return (
            <div className="padded-page">
              <div class="col-container">
                <div class="col">
                  <section>
                    <article>
                      <p>Many veterans have a hard time translating their military skills into civilian skills that are used in the workforce, leaving them jobless.</p>
                      <p>Veterans often have difficulty translating their skills to the civilian workforce while creating resumes.</p>
                    </article>
                  </section>
                </div>
                  <div class="col">
                    <section>
                      <article>
                        <p>Veterans job skills are assessed to see how they apply to civilian jobs.</p>
                        <p>Veterans are given information about education and training options.</p>
                        <p>Help build veterans job-search skills.</p>
                        <p>Help find government benefits including unemployment compensation for ex-service members.</p>
                      </article>
                    </section>
                  </div>

                  <div class="col">
                    <section>
                      <article>
                        <p>More than 10 million veterans are unemployed. (1)</p>
                        <p>Veteran unemployment increases from 4.1 percent in March to 13.0 percent in April 2020 (2)</p>
                      </article>
                    </section>
                </div>
              </div>
            </div>
          ); 
          break;
          case AppMode.FEED_INTERESTS:
              return (
                <FeedInterests mode={this.props.mode}/>
              );
              break;
          case AppMode.FEED_SCHOOL:
            return (
              <FeedSchool mode={this.props.mode}/>
              );
              break; 
      }     
    }   
}

export default FeedPage;