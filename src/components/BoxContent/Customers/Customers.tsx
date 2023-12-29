import { Typography, ConfigProvider, Table, Input, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { SnippetsOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { allUsersStore } from '../Dashboard/Dashboard';
import searchArguments from '../../../functions/searchFilter';
import sortString from '../../../functions/sortString';
import CustomersWrapper from './Customers.styles';
import baseTheme from '../../../theme';

const Customers = observer(() => {
  const TableStyle = {
    width: '100%',
    height: '85%',
  } as const;

  const { getAllUsersAction, allUsers } = allUsersStore;
  const [searchedText, setSearchedText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsersAction();
  }, [getAllUsersAction]);

  // console.log(allCarts);

  if (!allUsers) {
    return null;
  }

  return allUsers.case({
    pending: () => <div>Loading...</div>,
    rejected: () => <div>Error</div>,
    fulfilled: (value) => (
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 10,
            colorTextBase: baseTheme.colors.font,
            colorBgBase: baseTheme.colors.bg,
            fontSize: 16,
          },
        }}
      >
        <CustomersWrapper>
          <Typography.Title level={4}>Customers</Typography.Title>

          <Input.Search
            placeholder="Type your request here, please..."
            style={{ marginBottom: 10 }}
            onSearch={(val) => {
              setSearchedText(val);
            }}
            onChange={(e) => {
              setSearchedText(e.target.value);
            }}
          />
          <Table
            columns={[
              {
                title: 'Photo',
                dataIndex: 'image',
                key: 'image',
                render: (i) => <img width={50} src={i} alt={i} />,
              },
              {
                title: 'FirstName',
                dataIndex: 'firstName',
                key: 'firstName',
                filteredValue: [searchedText],
                onFilter: (val, data) => {
                  const res = searchArguments(val.toString(), data.firstName);
                  return res;
                },
                sorter: (t1, t2) => sortString(t1.firstName, t2.firstName),
              },
              {
                title: 'LastName',
                dataIndex: 'lastName',
                key: 'lastName',
                sorter: (t1, t2) => sortString(t1.lastName, t2.lastName),
              },
              {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
                sorter: (d1, d2) => d1.age - d2.age,
              },
              {
                title: 'Details',
                render: (data) => (
                  <Button
                    type="link"
                    onClick={() =>
                      navigate('/admin-dashboard-react/user', { state: data })
                    }
                  >
                    <SnippetsOutlined />
                  </Button>
                ),
              },
            ]}
            // loading={loading}
            style={TableStyle}
            dataSource={value.users}
            rowKey={(record) => record.id}
            pagination={{
              defaultPageSize: 10,
              showSizeChanger: true,
              pageSizeOptions: ['10', '20', '30'],
            }}
          />
        </CustomersWrapper>
      </ConfigProvider>
    ),
  });
});

export default Customers;
