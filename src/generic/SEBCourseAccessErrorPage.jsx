import React, { useEffect } from 'react';
import { LearningHeader as Header } from '@edx/frontend-component-header';
import Footer from '@edx/frontend-component-footer';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { injectIntl } from '@edx/frontend-platform/i18n';
import { Alert } from '@openedx/paragon';
import { WarningFilled } from '@openedx/paragon/icons';
import { FormattedMessage } from '@edx/frontend-platform/i18n';

const SEBCourseAccessErrorPage = ({ intl }) => {

  return (
    <>
      <Header />
      <main id="main-content" className="container my-5 text-center" data-testid="access-denied-main">
      <Alert variant="warning" icon={WarningFilled}>
      <FormattedMessage
        id="learning.accessDenied.alert"
        description="Alert message shown to learner when access to the course is denied"
        defaultMessage="Please use Safe Exam Browser to access this course."
      />
    </Alert>
      </main>
      <Footer />
    </>
  );
}

export default injectIntl(SEBCourseAccessErrorPage);
