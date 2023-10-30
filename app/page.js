import { gql } from '@apollo/client'
import clientApollo from './apolloClient'

export default async function Home() {
  const data = await getData();
  return (
<div>
  {data.continents.map((continent) => (
    <div key={continent.code} className='rounded-lg bg-sky-100 p-2 m-2'>
      <div className='font-bold text-lg rounded-lg mb-2'>{continent.name}</div>
      <div className='flex flex-wrap gap-3'>
        {
          continent.countries.map((country) => (
            <div key={country.code} className='rounded-lg bg-sky-200 w-max p-2'>
              <div className='font-bold text-base rounded-lg mb-2'>{country.name}</div>
              <div className='flex flex-wrap gap-2'>
                {
                  country.languages.map((language) => (
                    <div key={language.code} className='rounded-lg border-2 border-blue-400 w-max p-2'>{language.name}</div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  ))}
</div>
  )
}

export async function getData() {
  console.log("Running");
  const client = clientApollo;
  const { data } = await client.query({
    query: gql`
    query continents {
      continents {
        code
        name
        countries {
          code
          name
          languages {
            code
            name
          }
        }
      }
    }
    `,
  });
  if (client.ok){
    throw new Error('Failed to fetch data')
  }
  return {
      continents: data.continents
  };
}
