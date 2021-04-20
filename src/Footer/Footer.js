import React from 'react';
import './Footer.css'

class Footer extends React.Component
{
    render()
    {
        return(
            <div>
				<section id="footer">				
				
               <div class="container">
			<div class="row text-center text-xs-center text-sm-left text-md-left">
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Quick links</h5>
					<ul class="list-unstyled quiqb8D02ck-links">
						<li><a href=""><i class="fa fa-angle-double-right"></i>Home</a></li>
						<li><a href=""><i class="fa fa-angle-double-right"></i>About</a></li>
						<li><a href=""><i class="fa fa-angle-double-right"></i>FAQ</a></li>
						<li><a href=""><i class="fa fa-angle-double-right"></i>Get Started</a></li>
						<li><a href=""><i class="fa fa-angle-double-right"></i>Videos</a></li>
					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Quick links</h5>
					<ul class="list-unstyled quick-links">
						<li><a href=""><i class="fa fa-angle-double-right"></i>Home</a></li>
						<li><a href=""><i class="fa fa-angle-double-right"></i>About</a></li>
						<li><a href=""><i class="fa fa-angle-double-right"></i>FAQ</a></li>
					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Share</h5>
					<ul class="list-unstyled quick-links social">
					<li class="list-inline-item"><a href=""><i class="fa fa-facebook"></i></a></li>
						<li class="list-inline-item"><a href=""><i class="fa fa-twitter"></i></a></li>
						<li class="list-inline-item"><a href=""><i class="fa fa-instagram"></i></a></li>
					</ul>
				</div>
			</div>	
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">					
					<p class="h6">© All right Reversed.<a class="text-green ml-2" href="https://www.sunlimetech.com" target="_blank"> SM VITA</a></p>
				</div>
				
			</div>	
		</div>
		</section>
            </div>
        )
    }
}

export default Footer;