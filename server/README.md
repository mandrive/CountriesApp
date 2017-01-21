# CountriesApp
Countries App

This is backend part of CountriesApp.
Tech stack used:
- .Net 4.6.1 - ASP.NET WebAPI 2
- SimpleInjector with WebAPI integration (for DI)

Tools used:
- Visual Studio 2015 Community Edition

What has been implemented:
- Operations on XML file, included within solution (with countries list)
- WebAPI controller with following endpoints:
    - GET /api/countries - gets all countries
    - GET /api/countries/{id} - gets country by id - not used in frontend part
    - POST /api/countries - adding new country (will be saved to XML file)
    - DELETE /api/countries/{id} - deleting a country by id (will be saved to XML file) - not used in frontend part
- Interface has been created for case when different repository implementation is needed, so if there is a need to switch from XML file to DB, we only need to inject different class to IoC container

What has not been implemented:
- PUT operation for updates

What can be improved and how:
- Reading XML file can be done in more generic way, so if our CountriesCollection would change to another class implementation, we wouldn't change serializer usage within repository
- proper exception handling should be added, so frontend client would receive proper HTTP Status Code on server side failure
- probably better handling for edge cases, proper HTTP Status codes should be returned according to REST best practices when for example trying to access resource which doesn't exist

How to run:

1. Open in Visual Studio
2. Start Debugging (F5)
3. To get JSON list of countries, open in browser http://localhost:9555/api/countries