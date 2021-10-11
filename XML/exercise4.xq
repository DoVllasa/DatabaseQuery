<result>
{
  for $located in //river[@name="Amazonas"]/located
  let $countryIdString := $located/@country/string()
  let $countryName := //country[@id=$countryIdString]/name/string()
  return <name>{$countryName}</name>
}
</result>