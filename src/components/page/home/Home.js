import React from 'react';
import './home.css';

// import component
import Winner from '../../winner/Winner'
import Breadcrumb from '../../breadcrumb/Breadcrumb';

class Home extends React.Component {
  componentWillMount = () => {
    //
  }

  render() {
    return (
      <div id="body-home">
        <Breadcrumb />
          <div class="featured-game">
            <div class="features">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="feature-box">
                      <div class="feature-box-inner">
                        <div class="row">
                          <div class="col-lg-4 col-md-6">
                            <div class="single-feature">
                              <div class="icon one">
                                <img src="assets/images/feature/icon1.png" alt="" />
                              </div>
                              <div class="content">
                                <h4 class="title">
                                  Exclusive Offer
                                </h4>
                                <a href="/#" class="link">read more <i class="fas fa-arrow-right"></i></a>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="single-feature">
                              <div class="icon two">
                                <img src="assets/images/feature/icon2.png" alt="" />
                              </div>
                              <div class="content">
                                <h4 class="title">
                                  Provably Fair
                                </h4>
                                <a href="/#" class="link">read more <i class="fas fa-arrow-right"></i></a>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="single-feature">
                              <div class="icon three">
                                <img src="assets/images/feature/icon3.png" alt="" />
                              </div>
                              <div class="content">
                                <h4 class="title">
                                    24/7 Support
                                </h4>
                                <a href="/#" class="link">read more <i class="fas fa-arrow-right"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8 col-md-10">
                  <div class="section-heading">
                    <h5 class="subtitle">
                        Try to check out our
                    </h5> 
                    <h2 class="title">
                        featured games
                    </h2>
                    <p class="text">
                        Check out our latest featured game! To meet today's challenges & earn cryptocurrency. Top 10 players receive prizes every hour!
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="game-slider">
                    <div class="item">
                      <div class="single-game">
                        <img src="assets/images/game/icon1.png" alt="" />
                        <a href="/#" class="mybtn2">PLay NoW !</a>
                      </div>
                    </div>
                    <div class="item">
                      <div class="single-game">
                          <img src="assets/images/game/icon2.png" alt="" />
                          <a href="/#" class="mybtn2">PLay NoW !</a>
                      </div>
                    </div>
                    <div class="item">
                      <div class="single-game">
                          <img src="assets/images/game/icon3.png" alt="" />
                          <a href="/#" class="mybtn2">PLay NoW !</a>
                      </div>
                    </div>
                    <div class="item">
                      <div class="single-game">
                          <img src="assets/images/game/icon2.png" alt="" />
                          <a href="/#" class="mybtn2">PLay NoW !</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="activities">
            <img class="shape shape1" src="assets/images/people/shape1.png" alt="" />
            <img class="shape shape2" src="assets/images/people/shape2.png" alt="" />
            <img class="shape shape3" src="assets/images/people/shape3.png" alt="" />
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8 col-md-10">
                  <div class="section-heading">
                    <h5 class="subtitle">
                      The Smarter Way 
                    </h5>
                    <h2 class="title">
                      Lend and Borrow
                    </h2>
                    <p class="text">
                      The World's First Crypto Lending Marketplace and 
                      Affordable and competitive interest rates
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="tab-menu-area">
                    <ul class="nav nav-lend mb-3" id="pills-tab" role="tablist">
                      <li class="nav-item">
                        <a class="nav-link active" id="pills-all-bets-tab" data-toggle="pill" href="/#pills-all-bets" role="tab" aria-controls="pills-all-bets" aria-selected="true">All bets</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="pills-my-bets-tab" data-toggle="pill" href="/#pills-my-bets" role="tab" aria-controls="pills-my-bets" aria-selected="false">my bets</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="pills-my-jackpots-tab" data-toggle="pill" href="/#pills-my-jackpots" role="tab" aria-controls="pills-my-jackpots" aria-selected="false">jackpots</a>
                      </li>
                    </ul>
                  </div>
                  <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-all-bets" role="tabpanel" aria-labelledby="pills-all-bets-tab">
                      <div class="responsive-table">
                        <table class="table">
                        <thead>
                          <tr>
                          <th scope="col">USER</th>
                          <th scope="col">BET ID</th>
                          <th scope="col">BET AMOUNT</th>
                          <th scope="col">CHANCE</th>
                          <th scope="col">GAME</th>
                          <th scope="col">PROFIT</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img src="assets/images/people/p1.png" alt="" />
                              Tom Bass
                            </td>
                            <td>
                              b799b8724b
                            </td>
                            <td>
                              <img src="assets/images/icon1.png" alt="" />
                              0.00000051
                            </td>
                            <td>70%</td>
                            <td>Dice</td>
                            <td>
                              <img src="assets/images/icon1.png" alt="" />
                              0.00000051
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src="assets/images/people/p2.png" alt="" />
                              Tom Bass
                            </td>
                            <td>
                              b799b8724b
                            </td>
                            <td>
                              <img src="assets/images/icon2.png" alt="" />
                              0.00000051
                            </td>
                            <td>70%</td>
                            <td>Dice</td>
                            <td>
                              <img src="assets/images/icon2.png" alt="" />
                              0.00000051
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src="assets/images/people/p3.png" alt="" />
                              Tom Bass
                            </td>
                            <td>
                              b799b8724b
                            </td>
                            <td>
                              <img src="assets/images/icon3.png" alt="" />
                              0.00000051
                            </td>
                            <td>70%</td>
                            <td>Dice</td>
                            <td>
                              <img src="assets/images/icon3.png" alt="" />
                              0.00000051
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src="assets/images/people/p4.png" alt="" />
                              Tom Bass
                            </td>
                            <td>
                              b799b8724b
                            </td>
                            <td>
                              <img src="assets/images/icon4.png" alt="" />
                              0.00000051
                            </td>
                            <td>70%</td>
                            <td>Dice</td>
                            <td>
                              <img src="assets/images/icon4.png" alt="" />
                              0.00000051
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src="assets/images/people/p5.png" alt="" />
                              Tom Bass
                            </td>
                            <td>
                              b799b8724b
                            </td>
                            <td>
                              <img src="assets/images/icon5.png" alt="" />
                              0.00000051
                            </td>
                            <td>70%</td>
                            <td>Dice</td>
                            <td>
                              <img src="assets/images/icon5.png" alt="" />
                              0.00000051
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src="assets/images/people/p6.png" alt="" />
                              Tom Bass
                            </td>
                            <td>
                              b799b8724b
                            </td>
                            <td>
                              <img src="assets/images/icon1.png" alt="" />
                              0.00000051
                            </td>
                            <td>70%</td>
                            <td>Dice</td>
                            <td>
                              <img src="assets/images/icon1.png" alt="" />
                              0.00000051
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src="assets/images/people/p1.png" alt="" />
                              Tom Bass
                            </td>
                            <td>
                              b799b8724b
                            </td>
                            <td>
                              <img src="assets/images/icon2.png" alt="" />
                              0.00000051
                            </td>
                            <td>70%</td>
                            <td>Dice</td>
                            <td>
                              <img src="assets/images/icon2.png" alt="" />
                              0.00000051
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src="assets/images/people/p2.png" alt="" />
                              Tom Bass
                            </td>
                            <td>
                              b799b8724b
                            </td>
                            <td>
                              <img src="assets/images/icon3.png" alt="" />
                              0.00000051
                            </td>
                            <td>70%</td>
                            <td>Dice</td>
                            <td>
                              <img src="assets/images/icon3.png" alt="" />
                              0.00000051
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src="assets/images/people/p3.png" alt="" />
                              Tom Bass
                            </td>
                            <td>
                              b799b8724b
                            </td>
                            <td>
                              <img src="assets/images/icon4.png" alt="" />
                              0.00000051
                            </td>
                            <td>70%</td>
                            <td>Dice</td>
                            <td>
                              <img src="assets/images/icon4.png" alt="" />
                              0.00000051
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src="assets/images/people/p4.png" alt="" />
                              Tom Bass
                            </td>
                            <td>
                              b799b8724b
                            </td>
                            <td>
                              <img src="assets/images/icon5.png" alt="" />
                              0.00000051
                            </td>
                            <td>70%</td>
                            <td>Dice</td>
                            <td>
                              <img src="assets/images/icon5.png" alt="" />
                              0.00000051
                            </td>
                          </tr>
                        </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="pills-my-bets" role="tabpanel" aria-labelledby="pills-my-bets-tab">
                      <div class="responsive-table">
                          <table class="table">
                              <thead>
                                <tr>
                                <th scope="col">USER</th>
                                <th scope="col">BET ID</th>
                                <th scope="col">BET AMOUNT</th>
                                <th scope="col">CHANCE</th>
                                <th scope="col">GAME</th>
                                <th scope="col">PROFIT</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <img src="assets/images/people/p1.png" alt="" />
                                    Tom Bass
                                  </td>
                                  <td>
                                    b799b8724b
                                  </td>
                                  <td>
                                    <img src="assets/images/icon1.png" alt="" />
                                    0.00000051
                                  </td>
                                  <td>70%</td>
                                  <td>Dice</td>
                                  <td>
                                    <img src="assets/images/icon1.png" alt="" />
                                    0.00000051
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="assets/images/people/p2.png" alt="" />
                                    Tom Bass
                                  </td>
                                  <td>
                                    b799b8724b
                                  </td>
                                  <td>
                                    <img src="assets/images/icon2.png" alt="" />
                                    0.00000051
                                  </td>
                                  <td>70%</td>
                                  <td>Dice</td>
                                  <td>
                                    <img src="assets/images/icon2.png" alt="" />
                                    0.00000051
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="assets/images/people/p3.png" alt="" />
                                    Tom Bass
                                  </td>
                                  <td>
                                    b799b8724b
                                  </td>
                                  <td>
                                    <img src="assets/images/icon3.png" alt="" />
                                    0.00000051
                                  </td>
                                  <td>70%</td>
                                  <td>Dice</td>
                                  <td>
                                    <img src="assets/images/icon3.png" alt="" />
                                    0.00000051
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="assets/images/people/p4.png" alt="" />
                                    Tom Bass
                                  </td>
                                  <td>
                                    b799b8724b
                                  </td>
                                  <td>
                                    <img src="assets/images/icon4.png" alt="" />
                                    0.00000051
                                  </td>
                                  <td>70%</td>
                                  <td>Dice</td>
                                  <td>
                                    <img src="assets/images/icon4.png" alt="" />
                                    0.00000051
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="assets/images/people/p5.png" alt="" />
                                    Tom Bass
                                  </td>
                                  <td>
                                    b799b8724b
                                  </td>
                                  <td>
                                    <img src="assets/images/icon5.png" alt="" />
                                    0.00000051
                                  </td>
                                  <td>70%</td>
                                  <td>Dice</td>
                                  <td>
                                    <img src="assets/images/icon5.png" alt="" />
                                    0.00000051
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="assets/images/people/p6.png" alt="" />
                                    Tom Bass
                                  </td>
                                  <td>
                                    b799b8724b
                                  </td>
                                  <td>
                                    <img src="assets/images/icon1.png" alt="" />
                                    0.00000051
                                  </td>
                                  <td>70%</td>
                                  <td>Dice</td>
                                  <td>
                                    <img src="assets/images/icon1.png" alt="" />
                                    0.00000051
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="assets/images/people/p1.png" alt="" />
                                    Tom Bass
                                  </td>
                                  <td>
                                    b799b8724b
                                  </td>
                                  <td>
                                    <img src="assets/images/icon2.png" alt="" />
                                    0.00000051
                                  </td>
                                  <td>70%</td>
                                  <td>Dice</td>
                                  <td>
                                    <img src="assets/images/icon2.png" alt="" />
                                    0.00000051
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="assets/images/people/p2.png" alt="" />
                                    Tom Bass
                                  </td>
                                  <td>
                                    b799b8724b
                                  </td>
                                  <td>
                                    <img src="assets/images/icon3.png" alt="" />
                                    0.00000051
                                  </td>
                                  <td>70%</td>
                                  <td>Dice</td>
                                  <td>
                                    <img src="assets/images/icon3.png" alt="" />
                                    0.00000051
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="assets/images/people/p3.png" alt="" />
                                    Tom Bass
                                  </td>
                                  <td>
                                    b799b8724b
                                  </td>
                                  <td>
                                    <img src="assets/images/icon4.png" alt="" />
                                    0.00000051
                                  </td>
                                  <td>70%</td>
                                  <td>Dice</td>
                                  <td>
                                    <img src="assets/images/icon4.png" alt="" />
                                    0.00000051
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="assets/images/people/p4.png" alt="" />
                                    Tom Bass
                                  </td>
                                  <td>
                                    b799b8724b
                                  </td>
                                  <td>
                                    <img src="assets/images/icon5.png" alt="" />
                                    0.00000051
                                  </td>
                                  <td>70%</td>
                                  <td>Dice</td>
                                  <td>
                                    <img src="assets/images/icon5.png" alt="" />
                                    0.00000051
                                  </td>
                                </tr>
                              </tbody>
                              </table>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="pills-my-jackpots" role="tabpanel" aria-labelledby="pills-my-jackpots-tab">
                      <div class="responsive-table">
                          <table class="table">
                              <thead>
                                <tr>
                                <th scope="col">USER</th>
                                <th scope="col">BET ID</th>
                                <th scope="col">BET AMOUNT</th>
                                <th scope="col">CHANCE</th>
                                <th scope="col">GAME</th>
                                <th scope="col">PROFIT</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <img src="assets/images/people/p1.png" alt="" />
                                    Tom Bass
                                  </td>
                                  <td>
                                    b799b8724b
                                  </td>
                                  <td>
                                    <img src="assets/images/icon1.png" alt="" />
                                    0.00000051
                                  </td>
                                  <td>70%</td>
                                  <td>Dice</td>
                                  <td>
                                    <img src="assets/images/icon1.png" alt="" />
                                    0.00000051
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="assets/images/people/p2.png" alt="" />
                                    Tom Bass
                                  </td>
                                  <td>
                                    b799b8724b
                                  </td>
                                  <td>
                                    <img src="assets/images/icon2.png" alt="" />
                                    0.00000051
                                  </td>
                                  <td>70%</td>
                                  <td>Dice</td>
                                  <td>
                                    <img src="assets/images/icon2.png" alt="" />
                                    0.00000051
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="assets/images/people/p3.png" alt="" />
                                    Tom Bass
                                  </td>
                                  <td>
                                    b799b8724b
                                  </td>
                                  <td>
                                    <img src="assets/images/icon3.png" alt="" />
                                    0.00000051
                                  </td>
                                  <td>70%</td>
                                  <td>Dice</td>
                                  <td>
                                    <img src="assets/images/icon3.png" alt="" />
                                    0.00000051
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="assets/images/people/p4.png" alt="" />
                                    Tom Bass
                                  </td>
                                  <td>
                                    b799b8724b
                                  </td>
                                  <td>
                                    <img src="assets/images/icon4.png" alt="" />
                                    0.00000051
                                  </td>
                                  <td>70%</td>
                                  <td>Dice</td>
                                  <td>
                                    <img src="assets/images/icon4.png" alt="" />
                                    0.00000051
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="assets/images/people/p5.png" alt="" />
                                    Tom Bass
                                  </td>
                                  <td>
                                    b799b8724b
                                  </td>
                                  <td>
                                    <img src="assets/images/icon5.png" alt="" />
                                    0.00000051
                                  </td>
                                  <td>70%</td>
                                  <td>Dice</td>
                                  <td>
                                    <img src="assets/images/icon5.png" alt="" />
                                    0.00000051
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="assets/images/people/p6.png" alt="" />
                                    Tom Bass
                                  </td>
                                  <td>
                                    b799b8724b
                                  </td>
                                  <td>
                                    <img src="assets/images/icon1.png" alt="" />
                                    0.00000051
                                  </td>
                                  <td>70%</td>
                                  <td>Dice</td>
                                  <td>
                                    <img src="assets/images/icon1.png" alt="" />
                                    0.00000051
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="assets/images/people/p1.png" alt="" />
                                    Tom Bass
                                  </td>
                                  <td>
                                    b799b8724b
                                  </td>
                                  <td>
                                    <img src="assets/images/icon2.png" alt="" />
                                    0.00000051
                                  </td>
                                  <td>70%</td>
                                  <td>Dice</td>
                                  <td>
                                    <img src="assets/images/icon2.png" alt="" />
                                    0.00000051
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="assets/images/people/p2.png" alt="" />
                                    Tom Bass
                                  </td>
                                  <td>
                                    b799b8724b
                                  </td>
                                  <td>
                                    <img src="assets/images/icon3.png" alt="" />
                                    0.00000051
                                  </td>
                                  <td>70%</td>
                                  <td>Dice</td>
                                  <td>
                                    <img src="assets/images/icon3.png" alt="" />
                                    0.00000051
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="assets/images/people/p3.png" alt="" />
                                    Tom Bass
                                  </td>
                                  <td>
                                    b799b8724b
                                  </td>
                                  <td>
                                    <img src="assets/images/icon4.png" alt="" />
                                    0.00000051
                                  </td>
                                  <td>70%</td>
                                  <td>Dice</td>
                                  <td>
                                    <img src="assets/images/icon4.png" alt="" />
                                    0.00000051
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="assets/images/people/p4.png" alt="" />
                                    Tom Bass
                                  </td>
                                  <td>
                                    b799b8724b
                                  </td>
                                  <td>
                                    <img src="assets/images/icon5.png" alt="" />
                                    0.00000051
                                  </td>
                                  <td>70%</td>
                                  <td>Dice</td>
                                  <td>
                                    <img src="assets/images/icon5.png" alt="" />
                                    0.00000051
                                  </td>
                                </tr>
                              </tbody>
                              </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="funfact">
              <div class="container">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="single-fun">
                      <img src="assets/images/funfact/icon1.png" alt="" />
                      <div class="count-area">
                        <div class="count">93K</div>
                      </div>
                      <p>
                          Players
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="single-fun">
                      <img src="assets/images/funfact/icon2.png" alt="" />
                      <div class="count-area">
                        <div class="count">99+</div>
                      </div>
                      <p>
                          Games
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="single-fun">
                      <img src="assets/images/funfact/icon3.png" alt="" />
                      <div class="count-area">
                        <div class="count">70+</div>
                      </div>
                      <p>
                          Winners
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 

          <div class="get-start">
            <div class="container">
              <div class="row">
                <div class="col-lg-7 d-flex align-self-center">
                  <div class="left-area">
                    <div class="section-heading">
                      <h5 class="subtitle">
                        every day lots of  wins
                      </h5>
                      <h2 class="title ">
                          be one of them
                      </h2>
                      <p class="text">
                          Get started in less than 5 min - no credit card 
                          required.Gain early access to Dooplo and  experience crypto like never before. 
                      </p>
                      <a href="/#" class="mybtn1">Play  Now!</a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5">
                  <div class="right-image">
                    <img src="assets/images/get-start.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div> 
        <Winner />
      </div>
    );
  }
}

export default Home;