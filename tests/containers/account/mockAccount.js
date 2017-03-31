/**
 * mockAccount.js
 * Created by Kevin Li 3/27/17
 */

export const mockAccount = {
    id: 2507,
    agency_identifier: "089",
    main_account_code: "0208",
    account_title: "Title 17 Innovative Technology Loan Guarantee Program, Energy Programs, Energy"
};

export const mockReduxAccount = {
    id: 2507,
    title: 'Title 17 Innovative Technology Loan Guarantee Program, Energy Programs, Energy',
    agency_identifier: '089',
    main_account_code: '0208',
    description: 'Not available',
    totals: {
        outlay: {
            2017: '-5505246.42'
        },
        budgetAuthority: {
            2017: '201404661.47'
        },
        obligated: {
            2017: '2696684.86'
        },
        unobligated: {
            2017: '198707976.61'
        }
    }
};

export const mockBalances = {
    unobligated: {
        page_metadata: {
            num_pages: 1,
            count: 1,
            page_number: 1
        },
        results: [{
            item: "2016-11-01",
            aggregate: "198707976.61"
        }],
        total_metadata: {
            count: 1
        }
    },
    obligated: {
        page_metadata: {
            num_pages: 1,
            count: 1,
            page_number: 1
        },
        results: [{
            item: "2016-11-01",
            aggregate: "2696684.86"
        }],
        total_metadata: {
            count: 1
        }
    },
    budgetAuthority: {
        page_metadata: {
            num_pages: 1,
            count: 1,
            page_number: 1
        },
        results: [{
            item: "2016-11-01",
            aggregate: "201404661.47"
        }],
        total_metadata: {
            count: 1
        }
    },
    outlay: {
        page_metadata: {
            num_pages: 1,
            count: 1,
            page_number: 1
        },
        results: [{
            item: "2016-11-01",
            aggregate: "-5505246.42"
        }],
        total_metadata: {
            count: 1
        }
    }
};

export const mockCategories = {
    total_metadata: {
        count: 1
    },
    page_metadata: {
        page_number: 1,
        num_pages: 1,
        count: 1
    },
    results: [{
        item: "709",
        aggregate: "-2696684.86"
    }]
};