<result>
{
  for $c in //country
  where $c/@total_area > 100000
  let $cCapital := $c/@capital/string()
  let $cCapitalCity := //city[@id=$cCapital]/name/string()
  order by $c/name[1]
  return <country>
    <name>{$c/name/string()}</name>
    <capital>{$cCapitalCity}</capital>
  </country>
}
</result>