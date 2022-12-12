import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface CompanyData {
  company: string;
  laidOff: number;
  date: string;
  percentage: number;
  industry: string;
  country: string;
}

const ELEMENT_DATA: CompanyData[] = [
  {
    company: 'Meta',
    laidOff: 11000,
    date: '9/11/2022',
    percentage: 0.13,
    industry: 'Consumer',
    country: 'United States',
  },
  {
    company: 'Amazon',
    laidOff: 10000,
    date: '16/11/2022',
    percentage: 0.03,
    industry: 'Retail',
    country: 'United States',
  },
  {
    company: 'Booking',
    laidOff: 4375,
    date: '30/7/2020',
    percentage: 0.25,
    industry: 'Travel',
    country: 'Netherlands',
  },
  {
    company: 'Cisco',
    laidOff: 4100,
    date: '16/11/2022',
    percentage: 0.05,
    industry: 'Infrastructure',
    country: 'United States',
  },
  {
    company: 'Uber',
    laidOff: 3700,
    date: '6/5/2020',
    percentage: 0.14,
    industry: 'Transportation',
    country: 'United States',
  },
  {
    company: 'Twitter',
    laidOff: 3700,
    date: '4/11/2022',
    percentage: 0.5,
    industry: 'Consumer',
    country: 'United States',
  },
  {
    company: 'Better.com',
    laidOff: 3000,
    date: '8/3/2022',
    percentage: 0.33,
    industry: 'Real Estate',
    country: 'United States',
  },
  {
    company: 'Groupon',
    laidOff: 2800,
    date: '13/4/2020',
    percentage: 0.44,
    industry: 'Retail',
    country: 'United States',
  },
  {
    company: 'Peloton',
    laidOff: 2800,
    date: '8/2/2022',
    percentage: 0.2,
    industry: 'Fitness',
    country: 'United States',
  },
  {
    company: 'Carvana',
    laidOff: 2500,
    date: '10/5/2022',
    percentage: 0.05,
    industry: 'Transportation',
    country: 'United States',
  },
  {
    company: "Byju's",
    laidOff: 2500,
    date: '12/10/2022',
    percentage: 0.05,
    industry: 'Education',
    country: 'India',
  },
  {
    company: 'Katerra',
    laidOff: 2434,
    date: '1/6/2021',
    percentage: 1,
    industry: 'Construction',
    country: 'United States',
  },
  {
    company: 'Zillow',
    laidOff: 2000,
    date: '2/11/2021',
    percentage: 0.25,
    industry: 'Real Estate',
    country: 'United States',
  },
  {
    company: 'Crypto.com',
    laidOff: 2000,
    date: '6/10/2022',
    percentage: 0.3,
    industry: 'Crypto',
    country: 'Singapore',
  },
  {
    company: 'Airbnb',
    laidOff: 1900,
    date: '5/5/2020',
    percentage: 0.25,
    industry: 'Travel',
    country: 'United States',
  },
];

/**
 * @title Basic use of `<mat-table>` (uses display flex)
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'company',
    'laid-off',
    'date',
    'percentage',
    'industry',
    'country',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
