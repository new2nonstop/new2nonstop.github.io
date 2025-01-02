import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'

export const Programs = ({ title, cards }) => {
	return (
		<div id="programs" className="bg-secondary py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							link={value.link} />
					))}
				</div>
			</div>
		</div>
	);
}

export const Projects = ({ title, cards }) => {
	return (
		<div id="programs" className="bg-primary py-5 px-5">
			<div className="container">
				<h1 className="text-light fw-bold">Projects</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							icons={value.icons} />
					))}
				</div>
				{/* <div className="text-center">
					<button type="button" className="btn btn-outline-light">See More</button>
				</div> */}
			</div>
		</div>
	);
}

export const Card = ({ title, description, link, icons }) => {
	return (
		<div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "20rem" }}>
			<a href={link}>
				<h4 className="text-primary">{title}</h4>
				<p className="text-dark">{description}</p>
				<div className="text-end">
					{/* {icons && icons.map((value, index) => (
						<Link key={index} href={value.link}>
							<a target="_blank" rel="noreferrer">
								<FontAwesomeIcon className="icon-style mx-1" icon={value.icon} size="2x" />
							</a>
						</Link>
					))} */}
				</div>
			</a>
		</div>
	);
}

export const Buddy = ({ title, description, image, buttons }) => {
	return (
		<div id="buddy" className="bg-primary py-5 px-5">
			<div className="container">
				<div className=" row align-items-center">
					<div className="col-sm-6">
						{/* <h1 className="text-primary fw-bold display-3">{title}</h1> */}
						<h1 className="text-light fw-bold">{title}</h1>
						<div className="text-secondary px-sm-5">
							{description.map((value, index) => (
								<p key={index} >{value}</p>
							))}
						</div>
						<div className="text-center">
							{buttons.map((value, index) => (
								(value.isPrimary) ?
									<Link key={index} href={value.link}>
										<a className="btn btn-primary my-1 mx-3">{value.title}</a>
									</Link>
									:
									<Link key={index} href={value.link}>
										<a target="_blank" rel="noreferrer" className="btn btn-light my-1 mx-3">{value.title}</a>
									</Link>
							))}
						</div>
					</div>
					<div className="col-sm-6 text-center">
						<img
							className="img-fluid my-3 card-image" width="600"
							height="250" src={image}
							alt="timeline of buddy program"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}