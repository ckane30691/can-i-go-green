import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ProfileForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.profile;
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		if (this.props.match.params.profileId) {
			this.props.fetchProfile(this.props.match.params.profileId);
		}
	}

	componentWillReceiveProps(newProps) {
		this.setState(newProps.profile);
	}

	update(field) {
		return e => this.setState({[field]: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.createProfile(this.state)
		// .then(() => this.props.history.push('/profiles'));
	}

	render() {
		const company = this.state ? this.state.company : "";
		const employeeSize = this.state ? this.state.employeeSize : "";
		const city = this.state ? this.state.city : "";
		const country = this.state ? this.state.country : "";
		const salesVolume = this.state ? this.state.salesVolume : "";
    const item = this.state ? this.state.item : "";
		const sustainableOptionName = this.state ? this.state.sustainableOptionName : "";
		const sustainableOptionCostPerItem = this.state ? this.state.sustainableOptionCostPerItem : "";
		const sustainablePurchase = this.state ? this.state.sustainablePurchase : "";
		const cleaning = this.state ? this.state.cleaning : "";
		const installation = this.state ? this.state.installation : "";
		const kWhOfSystem = this.state ? this.state.kWhOfSystem : "";
		const costOfSystemPrerebate = this.state ? this.state.costOfSystemPrerebate : "";
		const federalTaxCredit = this.state ? this.state.federalTaxCredit : "";
		const cleanCredits = this.state ? this.state.cleanCredits : "";
		const benefits = this.state ? this.state.benefits : "";
		const kWhCost = this.state ? this.state.kWhCost : "";
		const sustainableOptionQuantity = this.state ? this.state.sustainableOptionQuantity : "";
		const sustainableOptionUsesPerItemQuantity = this.state ? this.state.sustainableOptionUsesPerItemQuantity : "";
		const sustainableOptionSalesFactor = this.state ? this.state.sustainableOptionSalesFactor : "";
		const disposableOptionName = this.state ? this.state.disposableOptionName : "";
		const disposableOptionCostPerItem = this.state ? this.state.disposableOptionCostPerItem : "";
		const disposablePurchase = this.state ? this.state.disposablePurchase : "";
		const disposal = this.state ? this.state.disposal : "";
		const disposableOptionQuantity = this.state ? this.state.disposableOptionQuantity : "";
		const disposableOptionusesPerItemQuantity = this.state ? this.state.disposableOptionusesPerItemQuantity : "";
		const disposableOptionusesPerItemsalesFactor = this.state ? this.state.disposableOptionusesPerItemsalesFactor : "";

			return(
				<div className={`splash-profile-container`}>
					<form onSubmit={this.handleSubmit}>
						<input required type="text"
							value={company}
							onChange={this.update('company')}
							className="profile-input"
							placeholder="Company Name" />

						<br/>

						<input type="text"
							value={city}
							onChange={this.update('city')}
							className="profile-input"
							placeholder="City" />

						<br/>

						<input type="text"
							value={country}
							onChange={this.update('country')}
							className="profile-input"
							placeholder="Country" />

						<br/>

						<input type="text"
							value={salesVolume}
							onChange={this.update('salesVolume')}
							className="profile-input"
							placeholder="Sales Volume" />

            <br/>

						<input type="text"
							value={item}
							onChange={this.update('item')}
							className="profile-input"
							placeholder="Item Name" />

            <br/>

						<input type="text"
							value={sustainableOptionName}
							onChange={this.update('sustainableOptionName')}
							className="profile-input"
							placeholder="Name of Sustainable Option" />

            <br/>

						<input type="text"
							value={sustainableOptionCostPerItem}
							onChange={this.update('sustainableOptionCostPerItem')}
							className="profile-input"
							placeholder="Cost of Sustainable Option Per Item" />

            <br/>

						<input type="text"
							value={sustainablePurchase}
							onChange={this.update('sustainablePurchase')}
							className="profile-input"
							placeholder="Total Cost Of Sustainable Purchase" />

            <br/>

						<input type="text"
							value={cleaning}
							onChange={this.update('cleaning')}
							className="profile-input"
							placeholder="Cleaning Cost" />

            <br/>

						<input type="text"
							value={installation}
							onChange={this.update('installation')}
							className="profile-input"
							placeholder="Installation Cost" />

            <br/>

						<input type="text"
							value={kWhOfSystem}
							onChange={this.update('kWhOfSystem')}
							className="profile-input"
							placeholder="Kilowatt Cost of System" />

            <br/>

						<input type="text"
							value={sustainableOptionQuantity}
							onChange={this.update('sustainableOptionQuantity')}
							className="profile-input"
							placeholder="Quantitiy of sustainable items" />

            <br/>

						<input type="text"
							value={sustainableOptionUsesPerItemQuantity}
							onChange={this.update('sustainableOptionUsesPerItemQuantity')}
							className="profile-input"
							placeholder="Number of uses per item" />

            <br/>

						<input type="text"
							value={sustainableOptionSalesFactor}
							onChange={this.update('sustainableOptionSalesFactor')}
							className="profile-input"
							placeholder="Sales factor for sustainable option" />

            <br/>

						<input type="text"
							value={disposableOptionName}
							onChange={this.update('disposableOptionName')}
							className="profile-input"
							placeholder="Name of disposable option" />

            <br/>

						<input type="text"
							value={disposableOptionCostPerItem}
							onChange={this.update('disposableOptionCostPerItem')}
							className="profile-input"
							placeholder="Total cost including the purchase and disposal of the Disposable Option Per Item" />

            <br/>

						<input type="text"
							value={disposablePurchase}
							onChange={this.update('disposablePurchase')}
							className="profile-input"
							placeholder="Total per unit cost to purchase the disposable item" />

            <br/>

						<input type="text"
							value={disposal}
							onChange={this.update('disposal')}
							className="profile-input"
							placeholder="Total cost of disposable purchase" />

            <br/>

						<input type="text"
							value={disposableOptionQuantity}
							onChange={this.update('disposableOptionQuantity')}
							className="profile-input"
							placeholder="Number of disposable units to be purchased" />

            <br/>

						<input type="text"
							value={disposableOptionusesPerItemQuantity}
							onChange={this.update('disposableOptionusesPerItemQuantity')}
							className="profile-input"
							placeholder="Number of uses per item for disposable option" />

            <br/>

						<input type="text"
							value={disposableOptionusesPerItemsalesFactor}
							onChange={this.update('disposableOptionusesPerItemsalesFactor')}
							className="profile-input"
							placeholder="Sales Factor per item for disposable option" />

						<input
							className="profile-submit"
							type="submit"
							value="Save" />

					</form>
					<Link to="/profiles"
						className="back-btn">
						Look at Profiles
					</Link>
				</div>
			);
	}
}

export default withRouter(ProfileForm);
