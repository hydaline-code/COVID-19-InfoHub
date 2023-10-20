import React from 'react';
import { render } from '@testing-library/react';
import Details from '../Alldetails';

const sampleData = {
  date: '2023-10-16',
  country: 'Sample Country',
  incident: '123',
  cases: '456',
  deaths: '78',
  ratio: '0.123',
};

describe('Details Component', () => {
  it('should render the component with provided data', () => {
    const { getByText } = render(
      <Details
        date={sampleData.date}
        country={sampleData.country}
        incident={sampleData.incident}
        cases={sampleData.cases}
        deaths={sampleData.deaths}
        ratio={sampleData.ratio}
      />,
    );
    const countryName = getByText(/Sample Country/);
    const incidentValue = getByText('123');
    const casesValue = getByText('456');
    const deathsValue = getByText('78');
    const ratioValue = getByText('0.123');
    const dateValue = getByText(/2023-10-16/);

    expect(countryName).toBeInTheDocument();
    expect(incidentValue).toBeInTheDocument();
    expect(casesValue).toBeInTheDocument();
    expect(deathsValue).toBeInTheDocument();
    expect(ratioValue).toBeInTheDocument();
    expect(dateValue).toBeInTheDocument();
  });

  it('should display correct icons', () => {
    const { container } = render(
      <Details
        date={sampleData.date}
        country={sampleData.country}
        incident={sampleData.incident}
        cases={sampleData.cases}
        deaths={sampleData.deaths}
        ratio={sampleData.ratio}
      />,
    );
    const iconElements = container.querySelectorAll('.icon');

    expect(iconElements).toHaveLength(4);
  });

  it('should display correct labels and values', () => {
    const { getByText } = render(
      <Details
        date={sampleData.date}
        country={sampleData.country}
        incident={sampleData.incident}
        cases={sampleData.cases}
        deaths={sampleData.deaths}
        ratio={sampleData.ratio}
      />,
    );
    const incidentLabel = getByText('INCIDENT');
    const casesLabel = getByText('CONFIRMED');
    const deathsLabel = getByText('DEATH(S)');
    const ratioLabel = getByText('RATIO');

    expect(incidentLabel).toBeInTheDocument();
    expect(casesLabel).toBeInTheDocument();
    expect(deathsLabel).toBeInTheDocument();
    expect(ratioLabel).toBeInTheDocument();
  });
});
