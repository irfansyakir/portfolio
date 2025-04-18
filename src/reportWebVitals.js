const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Core Web Vitals
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
      
      // Log to console in development environment
      if (process.env.NODE_ENV === 'development') {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(metric => console.log('CLS:', metric.value));
          getFID(metric => console.log('FID:', metric.value));
          getFCP(metric => console.log('FCP:', metric.value));
          getLCP(metric => console.log('LCP:', metric.value));
          getTTFB(metric => console.log('TTFB:', metric.value));
        });
      }
    });
  }
};



export default reportWebVitals;
