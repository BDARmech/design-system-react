/* eslint-env mocha */
/* global sinon */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-expressions */

import React, { PropTypes } from 'react';

import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
// `this.wrapper` and `this.dom` is set in the helpers file
import { mountComponent, unmountComponent } from '../enzyme-helpers';

chai.use(chaiEnzyme());

import Icon from '../../components/icon';
import globalSettings from '../../components/settings';

globalSettings.setIconsPath('/assets/icons');

const DemoIcon = React.createClass({
	displayName: 'DemoIcon',

	render () {
		return (
			<Icon {...this.props} />
		);
	}
});

describe('SLDSIcon: ', function () {
	describe('Standard Icon Props Render', function () {
		let component;
		let svg;
		let iconContainer;
		let asstText;

		beforeEach(mountComponent(
			<DemoIcon
				assistiveText="Log a Call"
				category="standard"
				name="log_a_call"
				style={{ backgroundColor: 'rgb(218, 165, 32)' }}
				size="large"
			/>
		));

		afterEach(unmountComponent);

		it('renders container class', function () {
			expect(this.wrapper.hasClass('slds-icon_container')).to.be.true;
		});

		it('renders assistive text', function () {
			asstText = this.wrapper.find('.slds-assistive-text');
			expect(asstText.text()).to.equal('Log a Call');
		});

		it('renders icon name class on svg', function () {
			// also tests that all '_' are replaced with '-'
			expect(this.wrapper.hasClass('slds-icon-standard-log-a-call')).to.be.true;
		});

		it('renders custom background color', function () {
			svg = this.wrapper.find('svg');
			expect(svg).to.have.style('backgroundColor', 'rgb(218, 165, 32)');
		});

		it('renders icon size class', function () {
			svg = this.wrapper.find('svg');
			expect(svg.hasClass('slds-icon--large')).to.be.true;
		});
	});

	describe('Custom Icon Props Render', function () {
		let component;
		let svg;
		let iconContainer;
		let asstText;

		beforeEach(mountComponent(
			<DemoIcon
				assistiveText="Heart"
				category="custom"
				name="custom1"
				size="small"
			/>
		));

		afterEach(unmountComponent);

		it('renders container class', function () {
			expect(this.wrapper.hasClass('slds-icon_container')).to.be.true;
		});

		it('renders assistive text', function () {
			asstText = this.wrapper.find('.slds-assistive-text');
			expect(asstText.text()).to.equal('Heart');
		});

		it('renders icon name class on svg', function () {
			// also tests that all '_' are replaced with '-'
			expect(this.wrapper.hasClass('slds-icon-custom-custom1')).to.be.true;
		});

		it('renders icon size class', function () {
			svg = this.wrapper.find('svg');
			expect(svg.hasClass('slds-icon--small')).to.be.true;
		});
	});

	describe('Action Icon Props Render', function () {
		let component;
		let svg;
		let iconContainer;
		let asstText;

		beforeEach(mountComponent(
			<DemoIcon
				assistiveText="Announcements"
				category="action"
				name="announcement"
				size="large"
				title="custom title"
				className="slds-m-around--x-small"
			/>
		));

		afterEach(unmountComponent);

		it('renders container class', function () {
			expect(this.wrapper.hasClass('slds-icon_container')).to.be.true;
		});

		it('renders assistive text', function () {
			asstText = this.wrapper.find('.slds-assistive-text');
			expect(asstText.text()).to.equal('Announcements');
		});

		it('renders round container', function () {
			expect(this.wrapper.hasClass('slds-icon_container--circle')).to.be.true;
		});

		it('renders icon name class on svg', function () {
			// also tests that all '_' are replaced with '-'
			expect(this.wrapper.hasClass('slds-icon-action-announcement')).to.be.true;
		});

		it('renders icon size class', function () {
			svg = this.wrapper.find('svg');
			expect(svg.hasClass('slds-icon--large')).to.be.true;
		});

		it('renders title', function () {
			expect(this.wrapper.find('[title="custom title"]')).to.exist;
		});
	});

	describe('Utility Icon Props Render', function () {
		let component;
		let svg;
		let iconContainer;
		let asstText;

		beforeEach(mountComponent(
			<DemoIcon
				category="utility"
				name="open_folder"
				size="medium"
			/>
		));

		afterEach(unmountComponent);

		it('does NOT render container class', function () {
			expect(this.wrapper.hasClass('slds-icon_container')).to.be.false;
		});

		it('medium size does not render size class', function () {
			// also tests that all '_' are replaced with '-'
			expect(this.wrapper.hasClass('slds-icon--medium')).to.be.false;
		});

		it('utility icons do not render name class on svg', function () {
			// also tests that all '_' are replaced with '-'
			expect(this.wrapper.hasClass('slds-icon-text-default')).to.be.false;
		});
	});
});
