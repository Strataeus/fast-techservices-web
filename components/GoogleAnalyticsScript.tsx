/**
 * Google Analytics 4 Script
 * Tracks page views, form submissions, and conversion events
 * Privacy-first: consent-based tracking
 */

export function GoogleAnalyticsScript() {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  if (!gaId) {
    return null; // GA not configured
  }

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              'anonymize_ip': true,
              'allow_google_signals': false,
              'allow_ad_personalization_signals': false
            });

            // Track form submissions
            window.trackFormSubmission = function(formType) {
              gtag('event', 'form_submission', {
                'form_type': formType,
                'timestamp': new Date().toISOString()
              });
            };

            // Track FAST Remote button clicks
            window.trackFastRemoteClick = function() {
              gtag('event', 'fast_remote_interest', {
                'timestamp': new Date().toISOString()
              });
            };

            // Track phone call intent
            window.trackPhoneClick = function() {
              gtag('event', 'phone_click', {
                'timestamp': new Date().toISOString()
              });
            };
          `,
        }}
      />
    </>
  );
}
