import { Typography, ConfigProvider, Table, Input, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { SnippetsOutlined } from '@ant-design/icons';
import { allProductsStore } from '../Dashboard/Dashboard';
import searchArguments from '../../../functions/searchFilter';
import InventoryWrapper from './Inventory.styles';
import baseTheme from '../../../theme';

const Inventory = observer(() => {
  const TableStyle = {
    width: '100%',
    height: '85%',
  } as const;

  const { getAllProductsAction, allProducts } = allProductsStore;
  const [searchedText, setSearchedText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getAllProductsAction();
  }, [getAllProductsAction]);

  // console.log(allProducts);

  if (!allProducts) {
    return null;
  }

  return allProducts.case({
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
        <InventoryWrapper>
          <Typography.Title level={4}>Inventory</Typography.Title>

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
                dataIndex: 'images',
                key: 'id',
                render: (i) => <img width={50} src={i[0]} alt={i[0]} />,
              },
              {
                title: 'Title',
                dataIndex: 'title',
                key: 'id',
                filteredValue: [searchedText],
                onFilter: (val, data) => {
                  const res =
                    searchArguments(val.toString(), data.title) ||
                    searchArguments(val.toString(), data.description);
                  return res;
                },
                sorter: (t1, t2) => {
                  const a = t1.title.toLowerCase();
                  const b = t2.title.toLowerCase();
                  if (a < b) return -1;
                  if (a > b) return 1;
                  return 0;
                },
              },
              {
                title: 'Description',
                dataIndex: 'description',
                key: 'id',
              },

              {
                title: 'Price',
                dataIndex: 'price',
                key: 'id',
                sorter: (d1, d2) => d1.price - d2.price,
              },
              {
                title: 'Details',
                render: (data) => (
                  <Button
                    type="link"
                    onClick={() =>
                      navigate('/admin-dashboard-react/item', { state: data })
                    }
                  >
                    <SnippetsOutlined />
                  </Button>
                ),
              },
            ]}
            // loading={loading}
            style={TableStyle}
            dataSource={value.products}
            rowKey={(record) => record.title}
            pagination={{
              defaultPageSize: 10,
              showSizeChanger: true,
              pageSizeOptions: ['10', '20', '30'],
            }}
          />
        </InventoryWrapper>
      </ConfigProvider>
    ),
  });
});

export default Inventory;
