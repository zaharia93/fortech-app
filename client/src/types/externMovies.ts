export interface IProp {
    _id: string;
    title: string;
    overview: string;
    release_date:number
    poster_path:string
    vote_average:number
  }



































  

  {/* <div>
      <form onSubmit={handleCreateMovie}>
        <input
          type='text'
         
          onChange={e => setName(e.target.value)}
          placeholder='Name'
          className='input w-full max-w-xs'
        />
        <input
          type='text'
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder='Desc'
          className='input w-full max-w-xs'
        />
        <input
          type='text'
          value={year}
          onChange={e => setYear(e.target.value)}
          placeholder='year'
          className='input w-full max-w-xs'
        />
        <button type='submit'>Create</button>
      </form>
    </div> */}