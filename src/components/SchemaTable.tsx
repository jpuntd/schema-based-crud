import { Table } from "antd"; 
import { useQuery } from '@tanstack/react-query'

export const data = [ 
    { 
    id: 1, 
    key: 1, 
    name: "Leanne Graham", 
    email: "Sincere@april.com", 
    address: "London Kulas Light Apt. 556", 
    phone: 1 - 7799 - 736 - 89931, 
    website: "https://tekolio.com/", 
    }, 
    { 
    id: 2, 
    key: 2,
    name: "Ervin Howell", 
    email: "Shanna@melissa.org", 
    address: "New York Victor Plains Suite 879" , 
    phone: 99199 - 692 - 65935, 
    website: "anastasia.net", 
    }, 
    { 
    id: 3, 
    key: 3,
    name: "Clementine Bauch", 
    email: "Nathan@yesenia.net", 
    address: "Douglas Extension uitzipcod", 
    phone: 1 - 463 - 123 - 4447, 
    website: "ramiro.info", 
    }
]

const columns = [ 
    { 
    key: "name", 
    title: "Name", 
    dataIndex: "name", 
    }, 
    { 
    key: "email", 
    title: "Email", 
    dataIndex: "email", 
    }, 
    { 
    key: "address", 
    title: "Address", 
    dataIndex: "address", 
    }, 
    { 
    key: "phone", 
    title: "Phone Number", 
    dataIndex: "phone", 
    }, 
    { 
    key: "website", 
    title: "Website", 
    dataIndex: "website", 
    }, 
    ] 
    
    function useEvents() {
        return useQuery({
          queryKey: ['events'],
          queryFn: async () => {
            const res = await fetch(
            '/events'
              //'https://jsonplaceholder.typicode.com/posts',
            )
            const json = await res.json()

            return json.events
          },
        })
      }
      

const SchemaTable = () => {
    const { isLoading, isError, data, error } = useEvents()
    
      if (isLoading) {
        return <span>Loading...</span>
      }
    
      if (isError) {
        return <span>Error: {error?.message}</span>
      }
    
    return <Table bordered={true} dataSource={data} columns={columns} pagination={false} /> 
}

export default SchemaTable