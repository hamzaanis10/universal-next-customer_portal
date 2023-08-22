import {Accordion, Tab, Tabs} from "react-bootstrap";

export default function FaqComponent(){
    return(
        <>
            <div className="gceFaq-tabs faqSec">
                <h3>FAQs</h3>
                <Tabs
                    defaultActiveKey="all"
                    id="justify-tab-example"
                    className="nav nav-tabs"
                    fill
                >
                    <Tab eventKey="all" title="ALL">
                        <div className="tab-pane active" id="tabs-all" role="tabpanel">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="accordion faqExample" id="faqExampleall">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                <Accordion>
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header className="card-header"><span> What do I have to do to buy a car?</span></Accordion.Header>
                                                        <Accordion.Body className="card-body">
                                                            <span> Registration is required. After registration is completed, you can buy any car that you want.</span>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="1">
                                                        <Accordion.Header className="card-header">  <span>  Do you have any criteria to become a registered member of Universal Motors?</span></Accordion.Header>
                                                        <Accordion.Body className="card-body">
                                                            <span> Anyone who is an automobile dealer or an individual buyer can apply for the membership. However, for an individual car buyer, we encourage you to check your countrys regulations before purchase. We are not familiar with the laws of your country. We are not able to offer you any advice, or to introduce you to any car importer or customs clearing agent in your country.</span>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="2">
                                                        <Accordion.Header className="card-header"> <span> How many used cars are normally available in your Inventory and in auction?</span></Accordion.Header>
                                                        <Accordion.Body className="card-body">
                                                            <span> Usually, we have more than a thousand cars in our regular inventory. In addition, you can have access to about 150,000 cars a week available at different online auctions we cover. Usually we have 2 to 3 RORO Ships and 4 to 5 Container Shipments in a month.</span>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="3">
                                                        <Accordion.Header className="card-header"> <span>   What payment methods can be accepted by Universal Motors?</span></Accordion.Header>
                                                        <Accordion.Body className="card-body">
                                                            <span> Normally we do accept payment by telegraphic transfer to our designated bank account from your bank.</span>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="4">
                                                        <Accordion.Header className="card-header"> <span> How long does it take me to receive my car?</span></Accordion.Header>
                                                        <Accordion.Body className="card-body">
                                                            <span> We cannot tell you the exact time for your car to be delivered to you as it completely depends on the shipping schedule and destination of the customer.</span>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="5">
                                                        <Accordion.Header className="card-header"> <span> Is there any membership fee?</span></Accordion.Header>
                                                        <Accordion.Body className="card-body">
                                                            <span> No. No fees or hidden charges are required. So dont hesitate and sign up now.</span>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="6">
                                                        <Accordion.Header className="card-header"> <span>If I purchase a vehicle at $ 2,000, how much will I have to pay as extra charges?</span></Accordion.Header>
                                                        <Accordion.Body className="card-body">
                                                            <span> If the price is in FOB, you will have to pay Freight charge, Clearance fee, Import duty, Registration fee, Compliance fee, and any other fee which may occur according to the import regulations of your country.If the price is in C&amp;F, you can omit Freight charge from the above charges.</span>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                <Accordion>
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header className="card-header"><span> Can I purchase LHD cars from Universal Motors?</span></Accordion.Header>
                                                        <Accordion.Body className="card-body">
                                                            <span> LHD cars are usually imported from countries like UAE, US, Europe and South Korea. However, you can search for an LHD car in a fair amount of South Korean and American Inventory.</span>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="1">
                                                        <Accordion.Header className="card-header">  <span> Can I cancel my purchase order?</span></Accordion.Header>
                                                        <Accordion.Body className="card-body">
                                                            <span> When you cancel an order, we may have to resell that car in an auction or in any other way. Therefore, if you cancel the order, you have to pay the balance in addition to the costs that may incur.</span>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="2">
                                                        <Accordion.Header className="card-header"> <span> Do you inspect the cars before shipping?</span></Accordion.Header>
                                                        <Accordion.Body className="card-body">
                                                            <span> All the cars are thoroughly inspected to confirm that there is no difference between the actual specifications and those on the specification sheet.</span>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="3">
                                                        <Accordion.Header className="card-header"> <span>  When can I use online auction service?</span></Accordion.Header>
                                                        <Accordion.Body className="card-body">
                                                            <span>You can use it every day.</span>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="4">
                                                        <Accordion.Header className="card-header"> <span> Is there any way to know an indicative bidding price for a vehicle I am interested in at an auction?</span></Accordion.Header>
                                                        <Accordion.Body className="card-body">
                                                            <span> Yes, the data from recent auctions will be a good source of information. It indicates the prices of vehicles that have been sold over the last 3 months.</span>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="5"  className="danger">
                                                        <Accordion.Header className="card-header"> <span> Do your staffs inspect the cars before bidding?</span></Accordion.Header>
                                                        <Accordion.Body className="card-body">
                                                            <span> We have highly skilled professionals who carefully inspect the cars. Before the professionals decide to bid a car, they confirm that the actual specification and condition of the car matches the information provided by the auction house.</span>
                                                        </Accordion.Body>
                                                    </Accordion.Item>

                                                </Accordion>



                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="auction_service" title="Auction Service">
                        <div className="accordion faqExample" id="faqExampleall">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header className="card-header"> <span> How many used cars are normally available in your Inventory and in auction?</span></Accordion.Header>
                                            <Accordion.Body className="card-body">
                                                <span> Usually, we have more than a thousand cars in our regular inventory. In addition, you can have access to about 150,000 cars a week available at different online auctions we cover. Usually we have 2 to 3 RORO Ships and 4 to 5 Container Shipments in a month.</span>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header className="card-header">  <span> Can I cancel my purchase order?</span></Accordion.Header>
                                            <Accordion.Body className="card-body">
                                                <span> When you cancel an order, we may have to resell that car in an auction or in any other way. Therefore, if you cancel the order, you have to pay the balance in addition to the costs that may incur.</span>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                    </Accordion>

                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header className="card-header"> <span>  When can I use online auction service?</span></Accordion.Header>
                                            <Accordion.Body className="card-body">
                                                <span>You can use it every day.</span>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header className="card-header"> <span> Is there any way to know an indicative bidding price for a vehicle I am interested in at an auction?</span></Accordion.Header>
                                            <Accordion.Body className="card-body">
                                                <span> Yes, the data from recent auctions will be a good source of information. It indicates the prices of vehicles that have been sold over the last 3 months.</span>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>

                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="lhd_cars" title="LHD Cars">
                        <div className="accordion faqExample" id="faqExampleall">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className="card-header"><span> Can I purchase LHD cars from Universal Motors?</span></Accordion.Header>
                                        <Accordion.Body className="card-body">
                                            <span> LHD cars are usually imported from countries like UAE, US, Europe and South Korea. However, you can search for an LHD car in a fair amount of South Korean and American Inventory.</span>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="others" title="Others" >
                        <div className="accordion faqExample" id="faqExampleall">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className="card-header"> <span>If I purchase a vehicle at $ 2,000, how much will I have to pay as extra charges?</span></Accordion.Header>
                                        <Accordion.Body className="card-body">
                                            <span> If the price is in FOB, you will have to pay Freight charge, Clearance fee, Import duty, Registration fee, Compliance fee, and any other fee which may occur according to the import regulations of your country.If the price is in C&amp;F, you can omit Freight charge from the above charges.</span>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="payment_buy" title="Payment &amp; How to Buy" >
                        <div className="accordion faqExample" id="faqExampleall">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header className="card-header"><span> What do I have to do to buy a car?</span></Accordion.Header>
                                            <Accordion.Body className="card-body">
                                                <span> Registration is required. After registration is completed, you can buy any car that you want.</span>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                    </Accordion>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header className="card-header"> <span>   What payment methods can be accepted by Universal Motors?</span></Accordion.Header>
                                            <Accordion.Body className="card-body">
                                                <span> Normally we do accept payment by telegraphic transfer to our designated bank account from your bank.</span>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="registratin_criteria" title="Registration Criteria" >
                        <div className="accordion faqExample" id="faqExampleall">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header className="card-header"><span> Do you have any criteria to become a registered member of Universal Motors?</span></Accordion.Header>
                                            <Accordion.Body className="card-body">
                                                <span> Anyone who is an automobile dealer or an individual buyer can apply for the membership. However, for an individual car buyer, we encourage you to check your countrys regulations before purchase. We are not familiar with the laws of your country. We are not able to offer you any advice, or to introduce you to any car importer or customs clearing agent in your country.</span>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                    </Accordion>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header className="card-header"> <span>   Is there any membership fee?</span></Accordion.Header>
                                            <Accordion.Body className="card-body">
                                                <span> No. No fees or hidden charges are required. So dont hesitate and sign up now.</span>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="shipping_document" title="Shipping &amp; Document" >
                        <div className="accordion faqExample" id="faqExampleall">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header className="card-header"><span> How long does it take me to receive my car?</span></Accordion.Header>
                                            <Accordion.Body className="card-body">
                                                <span> We cannot tell you the exact time for your car to be delivered to you as it completely depends on the shipping schedule and destination of the customer.</span>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="vehicle_inspection" title="Vehicle Inspection" >
                        <div className="accordion faqExample" id="faqExampleall">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header className="card-header"><span> Do your staffs inspect the cars before bidding?</span></Accordion.Header>
                                            <Accordion.Body className="card-body">
                                                <span> We have highly skilled professionals who carefully inspect the cars. Before the professionals decide to bid a car, they confirm that the actual specification and condition of the car matches the information provided by the auction house.</span>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                    </Accordion>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header className="card-header"> <span> Do you inspect the cars before shipping?</span></Accordion.Header>
                                            <Accordion.Body className="card-body">
                                                <span> All the cars are thoroughly inspected to confirm that there is no difference between the actual specifications and those on the specification sheet.</span>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>


            </div>
        </>
    )
}