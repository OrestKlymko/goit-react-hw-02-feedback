import css from './leavefdb.module.css';

export const FeedbackOptions = ({options,onLeaveFeedback}) => {


  const changeVote=(vote)=> {
  const newOptions = {...options, [vote]:options[vote]+1}
    onLeaveFeedback(newOptions)

  }


  return (
    <div>
      <button className={css.good} onClick={()=>changeVote('good')}>
        Good
      </button>
      <button className={css.neutral} onClick={()=>changeVote('neutral')}>
        Neutral
      </button>
      <button className={css.bad} onClick={()=>changeVote('bad')}>
        Bad
      </button>
    </div>
  );
};
