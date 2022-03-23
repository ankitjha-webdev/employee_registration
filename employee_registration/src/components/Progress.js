import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Progress = ({ location: { pathname } }) => {
  const isFirstStep = pathname === '/';
  const isSecondStep = pathname === '/second';
  const isThirdStep = pathname === '/third';
  const isLoginPage = pathname === '/login';

  return (
    <React.Fragment>
      {!isLoginPage ? (
        <div className="steps">
          <div className={`${isFirstStep ? 'step active' : 'step'}`}>
            <div>1</div>
            <div>
              {isSecondStep || isThirdStep ? (
                <Link to="/">Presonal Info</Link>
              ) : (
                'Presonal Info'
              )}
            </div>
          </div>
          <div className={`${isSecondStep ? 'step active' : 'step'}`}>
            <div>2</div>
            <div>
              {isThirdStep ? <Link to="/second">User Info</Link> : 'User Info'}
            </div>
          </div>
          <div className={`${pathname === '/third' ? 'step active' : 'step'}`}>
            <div>3</div>
            <div>Other info</div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </React.Fragment>
  );
};

export default withRouter(Progress);
