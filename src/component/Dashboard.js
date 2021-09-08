import React, { Component } from 'react';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6 mg-b-15">
                  <h1 className="m-0">Promotion & Plans</h1>
                </div>

                <div className="col-sm-6 mg-b-15 date-range">
                  <a href="#" className="">Period &nbsp; | &nbsp;</a>
                  <div id="reportrange"> <span class="selected"></span> &nbsp; <i class="fas fa-calendar-alt tx-gray"></i></div>
                </div>
              </div>{/* /.row */}
            </div>{/* /.container-fluid */}
          </div>
          {/* /.content-header */}


          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {/* Small boxes (Stat box) */}
               {/* overview section */}
              <div className="row mg-b-20">
              <div className="col-md-12 mg-b-10"><h4 className="tx-gray tx-upper sub-title">Overview</h4></div>
              <div className="col-lg-4 col-12">
                  {/* small box */}
                  <div className="small-box overview-card">
                    <div className="inner">
                      <div className="row impression-chart">
                      <div className="col-lg-6 col-6"> 
                      <p className="f-400 tx-small mg-b-0">Installs</p>
                      <h3 className="pd-t-10">150k <span class="badge bg-success text-success tx-small badge-span">5%</span></h3>
                      </div>
                        <div className="col-lg-6 col-6">
                        <div id="installs-pie" className="pie-div" />
                        
                        </div>
                      </div>
                      <div id="overview-installs" style={{ width: "100%", height: "200px" }} />

                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  {/* small box */}
                  <div className="small-box overview-card">
                    <div className="inner">
                    <div className="row impression-chart">
                      <div className="col-lg-6 col-6"> 
                      <p className="f-400 tx-small mg-b-0">Users</p>
                      <h3 className="pd-t-10">2,450 <span class="badge bg-success text-success tx-small badge-span">5%</span></h3>
                      </div>
                        <div className="col-lg-6 col-6">
                        <div id="users-pie" className="pie-div" />
                        
                        </div>
                      </div>
                      <div id="overview-users" style={{ width: "100%", height: "200px" }} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  {/* small box */}
                  <div className="small-box overview-card">
                    <div className="inner">
                    <div className="row impression-chart">
                      <div className="col-lg-6 col-6"> 
                      <p className="f-400 tx-small mg-b-0">Spends</p>
                      <h3 className="pd-t-10">2.5L <span class="badge bg-success text-success tx-small badge-span">5%</span></h3>
                      </div>
                        <div className="col-lg-6 col-6">
                        <div id="spends-pie" className="pie-div" />
                        </div>
                      </div>
                     
                      <div id="overview-spends" style={{ width: "100%", height: "200px" }} />

                    </div>
                  </div>
                </div>
              </div>

 {/* app pramotion section */}
              <div className="row  mg-t-40">
                <div className="col-md-12 mg-b-10"><h4 className="tx-gray tx-upper sub-title">App Promotions</h4></div>
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-white">
                    <div className="inner">
                      <p className="f-400 tx-small mg-b-0">Impressions</p>
                      <h3 className="pd-t-10">150k <span class="badge bg-success text-success tx-small badge-span">5%</span></h3>
                      <div id="impressionscard" style={{ width: "100%", height: "50px" }} />

                    </div>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-white">
                    <div className="inner">
                      <p className="f-400 tx-small mg-b-0">Clicks</p>
                      <h3 className="pd-t-10">100k <span class="badge bg-success text-success tx-small badge-span">5%</span></h3>
                      <div id="clickscard" style={{ width: "100%", height: "50px" }} />
                    </div>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-white">
                    <div className="inner">
                      <p className="f-400 tx-small mg-b-0">Conversion Rate</p>
                      <h3 className="pd-t-10">50% <span class="badge bg-success text-success tx-small badge-span">5%</span></h3>
                      <div id="conversioncard" style={{ width: "100%", height: "50px" }} />
                    </div>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-white">
                    <div className="inner">
                      <p className="f-400 tx-small mg-b-0">Installs</p>
                      <h3 className="pd-t-10">50k <span class="badge bg-success text-success tx-small badge-span">5%</span></h3>
                      <div id="installcard" style={{ width: "100%", height: "50px" }} />
                    </div>
                  </div>
                </div>
                {/* ./col */}
              </div>
              {/* /.row */}
              {/* Main row */}
              <div className="row">
                {/* Left col */}
                <section className="col-lg-12 connectedSortable mg-t-20">
                  {/* Custom tabs (Charts with tabs)*/}
                  <div className="card">
                    <div className="card-header">

                      <div className="col-12 card-tools">
                        <ul className="nav nav-pills ml-auto top-nav">
                          <li className="nav-item">
                            <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Impressions</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#sales-chart" data-toggle="tab">Clicks</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#conversion-chart" data-toggle="tab">Conversion Rate</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#install-chart" data-toggle="tab">Installs</a>
                          </li>
                        </ul>
                      </div>
                    </div>{/* /.card-header */}
                    <div className="card-body">
                      <div className="tab-content p-0">
                       
                        <div className="chart tab-pane active tab-container" id="revenue-chart">
                          <div id="impressions" style={{ width: "100%", height: "450px" }} />
                          <div className="mg-t-20">
                            <div id="mapdiv" style={{ width: "100%", height: "400px" }} />
                          </div>
                          {/* /.card-body*/}
                        </div>
                        <div className="chart tab-pane tab-container" id="sales-chart">
                          <div id="clicks" style={{ width: "100%", height: "450px" }} />
                          <div className="">
                          <div id="map" style={{ width: "100%", height: "450px" }}></div>
                          </div>
                          {/* /.card-body*/}
                        </div>
                        <div className="chart tab-pane tab-container" id="conversion-chart">
                          <div id="conversion" style={{ width: "100%", height: "450px" }} />
                          <div className="">
                            GHI
                          </div>
                          {/* /.card-body*/}
                        </div>
                        <div className="chart tab-pane tab-container" id="install-chart">
                          <div id="install" style={{ width: "100%", height: "450px" }} />
                          <div className="">
                            JKL
                          </div>
                          {/* /.card-body*/}
                        </div>
                      </div>
                    </div>{/* /.card-body */}
                  </div>
                 </section>
                <section className="col-lg-12 mg-t-20">
                  {/* Custom tabs (Charts with tabs)*/}
                  <div className="card">
                    <div className="card-body ">
                      <div className="col-12">
                        <div className="card-tabs">
                          <div className="card-header p-0 pt-1 border-bottom-0">
                            <ul className="nav nav-tabs" id="custom-tabs-three-tab" role="tablist">
                              <li className="nav-item">
                                <a className="nav-link active" id="custom-tabs-three-home-tab" data-toggle="pill" href="#custom-tabs-three-home" role="tab" aria-controls="custom-tabs-three-home" aria-selected="true">Google</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" id="custom-tabs-three-profile-tab" data-toggle="pill" href="#custom-tabs-three-profile" role="tab" aria-controls="custom-tabs-three-profile" aria-selected="false">Facebook</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" id="custom-tabs-three-messages-tab" data-toggle="pill" href="#custom-tabs-three-messages" role="tab" aria-controls="custom-tabs-three-messages" aria-selected="false">Instagram</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" id="custom-tabs-three-settings-tab" data-toggle="pill" href="#custom-tabs-three-settings" role="tab" aria-controls="custom-tabs-three-settings" aria-selected="false">Twitter</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" id="custom-tabs-three-contact-tab" data-toggle="pill" href="#custom-tabs-three-contact" role="tab" aria-controls="custom-tabs-three-contact" aria-selected="false">Linkedin</a>
                              </li>
                            </ul>
                          </div>
                          <div className="mg-t-20">
                            <div className="tab-content" id="custom-tabs-three-tabContent">
                              <div className="tab-pane fade show active" id="custom-tabs-three-home" role="tabpanel" aria-labelledby="custom-tabs-three-home-tab">
                                <div class="table-responsive p-0 table-scroll">
                                <table class="table table-head-fixed text-nowrap">
                                    <thead>
                                      <tr>
                                        <th></th>
                                        <th>Impressions</th>
                                        <th>Clicks</th>
                                        <th>CTR%</th>
                                        <th>Spends</th>
                                        <th>Installs</th>
                                       
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="odd">
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                        
                                      </tr>
                                      <tr>
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                       
                                      </tr>
                                      <tr className="odd">
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                        
                                      </tr>
                                      <tr>
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                        
                                      </tr>
                                      <tr className="odd">
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                      
                                      </tr>
                                      <tr>
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                        
                                      </tr>
                                      <tr className="odd">
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                       
                                      </tr>
                                      <tr>
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                        
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="tab-pane fade" id="custom-tabs-three-profile" role="tabpanel" aria-labelledby="custom-tabs-three-profile-tab">
                              <div class="table-responsive p-0 table-scroll">
                                  <table class="table table-head-fixed text-nowrap">
                                    <thead>
                                      <tr>
                                        <th></th>
                                        <th>Impressions</th>
                                        <th>Clicks</th>
                                        <th>CTR%</th>
                                        <th>Spends</th>
                                        <th>Installs</th>
                                       
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="odd">
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                        
                                      </tr>
                                      <tr>
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                       
                                      </tr>
                                      <tr className="odd">
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                        
                                      </tr>
                                      <tr>
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                        
                                      </tr>
                                      <tr className="odd">
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                      
                                      </tr>
                                      <tr>
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                        
                                      </tr>
                                      <tr className="odd">
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                       
                                      </tr>
                                      <tr>
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                        
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="tab-pane fade" id="custom-tabs-three-messages" role="tabpanel" aria-labelledby="custom-tabs-three-messages-tab">
                              <div class="table-responsive p-0 table-scroll">
                              <table class="table table-head-fixed text-nowrap">
                                    <thead>
                                      <tr>
                                        <th></th>
                                        <th>Impressions</th>
                                        <th>Clicks</th>
                                        <th>CTR%</th>
                                        <th>Spends</th>
                                        <th>Installs</th>
                                       
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="odd">
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                        
                                      </tr>
                                      <tr>
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                       
                                      </tr>
                                      <tr className="odd">
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                        
                                      </tr>
                                      <tr>
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                        
                                      </tr>
                                      <tr className="odd">
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                      
                                      </tr>
                                      <tr>
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                        
                                      </tr>
                                      <tr className="odd">
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                       
                                      </tr>
                                      <tr>
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                        
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="tab-pane fade" id="custom-tabs-three-settings" role="tabpanel" aria-labelledby="custom-tabs-three-settings-tab">
                              <div class="table-responsive p-0 table-scroll">
                              <table class="table table-head-fixed text-nowrap">
                                    <thead>
                                      <tr>
                                        <th></th>
                                        <th>Impressions</th>
                                        <th>Clicks</th>
                                        <th>CTR%</th>
                                        <th>Spends</th>
                                        <th>Installs</th>
                                       
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="odd">
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                        
                                      </tr>
                                      <tr>
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                       
                                      </tr>
                                      <tr className="odd">
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                        
                                      </tr>
                                      <tr>
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                        
                                      </tr>
                                      <tr className="odd">
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                      
                                      </tr>
                                      <tr>
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                        
                                      </tr>
                                      <tr className="odd">
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                       
                                      </tr>
                                      <tr>
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                        
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="tab-pane fade" id="custom-tabs-three-contact" role="tabpanel" aria-labelledby="custom-tabs-three-contact-tab">
                              <div class="table-responsive p-0 table-scroll">
                              <table class="table table-head-fixed text-nowrap">
                                    <thead>
                                      <tr>
                                        <th></th>
                                        <th>Impressions</th>
                                        <th>Clicks</th>
                                        <th>CTR%</th>
                                        <th>Spends</th>
                                        <th>Installs</th>
                                       
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="odd">
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                        
                                      </tr>
                                      <tr>
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                       
                                      </tr>
                                      <tr className="odd">
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                        
                                      </tr>
                                      <tr>
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                        
                                      </tr>
                                      <tr className="odd">
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                      
                                      </tr>
                                      <tr>
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                        
                                      </tr>
                                      <tr className="odd">
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                       
                                      </tr>
                                      <tr>
                                        <td>ClientName_Chennai_Display</td>
                                        <td>2,37,548</td>
                                        <td>1,038</td>
                                        <td>0.00</td>
                                        <td>5,199</td>
                                        <td><span class="tx-blue">1</span></td>
                                        
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* /.card */}
                        </div>
                      </div>

                    </div>
                    {/* /.card-body*/}

                  </div>
                </section>

                <section className="col-lg-12 mg-t-40">
                <div className="col-md-12 mg-b-20"><h3 className="tx-gray tx-upper sub-title">Plans</h3></div>
                  <div className="card">
                  <div class="card-header ui-sortable-handle bottom-border">
                  <div className="plan-filter">
                       <div class="form-group">
                        <select id="selectMe" class="custom-select">
                          <option value="option1">Channel</option>
                          <option value="option2">Source</option>
                        </select>
                      </div>
                      </div>
                      </div>
                    <div className="card-body">
                      <div id="option1" className="col-12 plan-card group">
                        <div className="col-lg-6 col-12">
                        <div class="table-responsive p-0 ">
                                  <table class="table table-head-fixed text-nowrap">
                                    <thead>
                                      <tr>
                                        <th>Payments Plan</th>
                                        <th>Event count</th>
                                        <th>People count</th>
                                        <th>Success Count</th>
                                        <th>Success %</th>
                                        <th>SALE</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="odd">
                                        <td>Plan 1</td>
                                        <td>20</td>
                                        <td>5</td>
                                        <td>10</td>
                                  <td className="white-space">50%
                                    <div className="progress">
                                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                        50% 
                                      </div>
                                    </div>

                                  </td>
                                        <td>500</td>
                                      </tr>
                                      <tr>
                                        <td>Plan 2</td>
                                        <td>20</td>
                                        <td>5</td>
                                        <td>10</td>
                                  <td className="white-space">50%
                                    <div className="progress">
                                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                        50%
                                      </div>
                                    </div>

                                  </td>
                                        <td>500</td>
                                   </tr>
                                      <tr className="odd">
                                        <td>Plan 3</td>
                                        <td>20</td>
                                        <td>5</td>
                                        <td>10</td>
                                  <td className="white-space">50%
                                    <div className="progress">
                                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                        50%
                                      </div>
                                    </div>

                                  </td>
                                        <td>500</td>
                                     </tr>
                                      <tr>
                                        <td>Plan 4</td>
                                        <td>20</td>
                                        <td>5</td>
                                        <td>10</td>
                                  <td className="white-space">50%
                                    <div className="progress">
                                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                        50%
                                      </div>
                                    </div>

                                  </td>
                                        <td>500</td>
                                      </tr>
                                      <tr className="odd">
                                        <td>Plan 5</td>
                                        <td>20</td>
                                        <td>5</td>
                                        <td>10</td>
                                  <td className="white-space">50%
                                    <div className="progress">
                                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                        50%
                                      </div>
                                    </div>

                                  </td>
                                        <td>500</td>
                                        </tr>
                                      <tr>
                                        <td>Plan 6</td>
                                        <td>20</td>
                                        <td>5</td>
                                        <td>10</td>
                                        <td className="white-space">50%
                                    <div className="progress">
                                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                        50% 
                                      </div>
                                    </div>

                                  </td>
                                        <td>500</td>
                                        </tr>
                                     
                                    </tbody>
                                  </table>
                                </div>
                        </div>
                        <div className="col-lg-6 col-12">
                        <div class="table-responsive p-0 ">
                                  <table class="table table-head-fixed text-nowrap">
                                    <thead>
                                      <tr>
                                        <th>Payment Method</th>
                                        <th>Event count</th>
                                        <th>People count</th>
                                        <th>Success Count</th>
                                        <th>Success %</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="odd">
                                        <td>CC</td>
                                        <td>10</td>
                                        <td>5</td>
                                        <td>10</td>
                                        <td className="white-space">50%
                                    <div className="progress">
                                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                        50% 
                                      </div>
                                    </div>

                                  </td>
                                        </tr>
                                      <tr>
                                      <td>DC</td>
                                        <td>10</td>
                                        <td>5</td>
                                        <td>10</td>
                                        <td className="white-space">50%
                                    <div className="progress">
                                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                        50% 
                                      </div>
                                    </div>

                                  </td>
                                       </tr>
                                      <tr className="odd">
                                      <td>UPI</td>
                                        <td>10</td>
                                        <td>5</td>
                                        <td>10</td>
                                        <td className="white-space">50%
                                    <div className="progress">
                                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                        50% 
                                      </div>
                                    </div>

                                  </td>
                                        </tr>
                                      <tr>
                                      <td>Wallet</td>
                                        <td>10</td>
                                        <td>5</td>
                                        <td>10</td>
                                        <td className="white-space">50%
                                    <div className="progress">
                                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                        50% 
                                      </div>
                                    </div>

                                  </td>
                                       </tr>
                                      <tr className="odd">
                                      <td>Paytm</td>
                                        <td>10</td>
                                        <td>5</td>
                                        <td>10</td>
                                        <td className="white-space">50%
                                    <div className="progress">
                                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                        50% 
                                      </div>
                                    </div>

                                  </td>
                                       </tr>
                                      <tr>
                                      <td>Google Pay</td>
                                        <td>10</td>
                                        <td>5</td>
                                        <td>10</td>
                                        <td className="white-space">50%
                                    <div className="progress">
                                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                        50% 
                                      </div>
                                    </div>

                                  </td>
                                      </tr>
                                     
                                    </tbody>
                                  </table>
                                </div>
                        </div>
                      </div>

                      <div id="option2" className="col-12 plan-card group">
                       
                        <div className="col-lg-6 col-12">
                        <div class="table-responsive p-0 ">
                                  <table class="table table-head-fixed text-nowrap">
                                    <thead>
                                      <tr>
                                        <th>Payments Plan</th>
                                        <th>Event count</th>
                                        <th>People count</th>
                                        <th>Success Count</th>
                                        <th>Success %</th>
                                        <th>SALE</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="odd">
                                        <td>Plan 1</td>
                                        <td>20</td>
                                        <td>5</td>
                                        <td>10</td>
                                  <td className="white-space">50%
                                    <div className="progress">
                                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                        50% 
                                      </div>
                                    </div>

                                  </td>
                                        <td>500</td>
                                      </tr>
                                      <tr>
                                        <td>Plan 2</td>
                                        <td>20</td>
                                        <td>5</td>
                                        <td>10</td>
                                  <td className="white-space">50%
                                    <div className="progress">
                                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                        50%
                                      </div>
                                    </div>

                                  </td>
                                        <td>500</td>
                                   </tr>
                                      <tr className="odd">
                                        <td>Plan 3</td>
                                        <td>20</td>
                                        <td>5</td>
                                        <td>10</td>
                                  <td className="white-space">50%
                                    <div className="progress">
                                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                        50%
                                      </div>
                                    </div>

                                  </td>
                                        <td>500</td>
                                     </tr>
                                      <tr>
                                        <td>Plan 4</td>
                                        <td>20</td>
                                        <td>5</td>
                                        <td>10</td>
                                  <td className="white-space">50%
                                    <div className="progress">
                                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                        50%
                                      </div>
                                    </div>

                                  </td>
                                        <td>500</td>
                                      </tr>
                                      <tr className="odd">
                                        <td>Plan 5</td>
                                        <td>20</td>
                                        <td>5</td>
                                        <td>10</td>
                                  <td className="white-space">50%
                                    <div className="progress">
                                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                        50%
                                      </div>
                                    </div>

                                  </td>
                                        <td>500</td>
                                        </tr>
                                      <tr>
                                        <td>Plan 6</td>
                                        <td>20</td>
                                        <td>5</td>
                                        <td>10</td>
                                        <td className="white-space">50%
                                    <div className="progress">
                                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                        50% 
                                      </div>
                                    </div>

                                  </td>
                                        <td>500</td>
                                        </tr>
                                     
                                    </tbody>
                                  </table>
                                </div>
                        </div>
                        <div className="col-lg-6 col-12">
                        <div class="table-responsive p-0 ">
                                  <table class="table table-head-fixed text-nowrap">
                                    <thead>
                                      <tr>
                                        <th>Payment Method</th>
                                        <th>Event count</th>
                                        <th>People count</th>
                                        <th>Success Count</th>
                                        <th>Success %</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="odd">
                                        <td>CC</td>
                                        <td>10</td>
                                        <td>5</td>
                                        <td>10</td>
                                        <td className="white-space">50%
                                    <div className="progress">
                                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                        50% 
                                      </div>
                                    </div>

                                  </td>
                                        </tr>
                                      <tr>
                                      <td>DC</td>
                                        <td>10</td>
                                        <td>5</td>
                                        <td>10</td>
                                        <td className="white-space">50%
                                    <div className="progress">
                                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                        50% 
                                      </div>
                                    </div>

                                  </td>
                                       </tr>
                                      <tr className="odd">
                                      <td>UPI</td>
                                        <td>10</td>
                                        <td>5</td>
                                        <td>10</td>
                                        <td className="white-space">50%
                                    <div className="progress">
                                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                        50% 
                                      </div>
                                    </div>

                                  </td>
                                        </tr>
                                      <tr>
                                      <td>Wallet</td>
                                        <td>10</td>
                                        <td>5</td>
                                        <td>10</td>
                                        <td className="white-space">50%
                                    <div className="progress">
                                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                        50% 
                                      </div>
                                    </div>

                                  </td>
                                       </tr>
                                      <tr className="odd">
                                      <td>Paytm</td>
                                        <td>10</td>
                                        <td>5</td>
                                        <td>10</td>
                                        <td className="white-space">50%
                                    <div className="progress">
                                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                        50% 
                                      </div>
                                    </div>

                                  </td>
                                       </tr>
                                      <tr>
                                      <td>Google Pay</td>
                                        <td>10</td>
                                        <td>5</td>
                                        <td>10</td>
                                        <td className="white-space">50%
                                    <div className="progress">
                                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                        50% 
                                      </div>
                                    </div>

                                  </td>
                                      </tr>
                                     
                                    </tbody>
                                  </table>
                                </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="col-lg-12 bottom-div mg-t-20">
                  <div className="col-lg-5 col-12">
                  <div className="card">
                      <div class="card-header ui-sortable-handle bottom-border">
                        <h3 class="card-title">Plan Split</h3>
                        <div className="pie-filter">
                          <div class="form-group">
                            <select class="custom-select">
                              <option value="count">Count</option>
                              <option value="sale">Sale</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    <div className="card-body">
                   <div id="sales-pie" style={{ width: "100%", height: "390px" }} />
                    </div>
                  </div>
                  </div>

                  <div className="col-lg-7 col-12">
                  <div className="card">
                      <div class="card-header ui-sortable-handle bottom-border">
                        <h3 class="card-title"> Purchase Tracker</h3>
                      </div>
                    <div className="card-body">
                   <div id="purchase-heatmap" style={{ width: "100%", height: "400px" }} />
                    </div>
                  </div>
                  </div>
                  
                </div>
              </div>
              {/* /.row (main row) */}
            </div>{/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>

      </div>
    )
  }
}
