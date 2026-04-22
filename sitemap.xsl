<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
  exclude-result-prefixes="s image video">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Essara Sitemap</title>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #0a0a0a;
            color: #e5e5e5;
            padding: 40px 20px;
            line-height: 1.6;
          }
          .container { max-width: 960px; margin: 0 auto; }
          h1 {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 8px;
            color: #fff;
          }
          .subtitle {
            color: #888;
            font-size: 14px;
            margin-bottom: 32px;
          }
          .stats {
            display: flex;
            gap: 24px;
            margin-bottom: 32px;
            flex-wrap: wrap;
          }
          .stat {
            background: #141414;
            border: 1px solid #222;
            border-radius: 12px;
            padding: 16px 24px;
            min-width: 140px;
          }
          .stat-value {
            font-size: 24px;
            font-weight: 700;
            color: #fff;
          }
          .stat-label {
            font-size: 12px;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background: #141414;
            border: 1px solid #222;
            border-radius: 12px;
            overflow: hidden;
          }
          thead {
            background: #1a1a1a;
          }
          th {
            text-align: left;
            padding: 14px 18px;
            font-size: 12px;
            font-weight: 600;
            color: #888;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border-bottom: 1px solid #222;
          }
          td {
            padding: 14px 18px;
            border-bottom: 1px solid #1a1a1a;
            font-size: 14px;
          }
          tr:hover td { background: #1a1a1a; }
          a {
            color: #60a5fa;
            text-decoration: none;
            word-break: break-all;
          }
          a:hover { text-decoration: underline; }
          .priority-high { color: #34d399; font-weight: 600; }
          .priority-med { color: #fbbf24; }
          .priority-low { color: #888; }
          .badge {
            display: inline-block;
            padding: 2px 10px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
          }
          .badge-weekly { background: #1e3a2f; color: #34d399; }
          .badge-monthly { background: #3d2e1a; color: #fbbf24; }
          .footer {
            margin-top: 32px;
            text-align: center;
            color: #444;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Essara Sitemap</h1>
          <p class="subtitle">https://essara.space/sitemap.xml</p>

          <div class="stats">
            <div class="stat">
              <div class="stat-value"><xsl:value-of select="count(//s:url)"/></div>
              <div class="stat-label">URLs</div>
            </div>
            <div class="stat">
              <div class="stat-value"><xsl:value-of select="count(//image:image)"/></div>
              <div class="stat-label">Images</div>
            </div>
            <div class="stat">
              <div class="stat-value"><xsl:value-of select="count(//video:video)"/></div>
              <div class="stat-label">Videos</div>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Priority</th>
                <th>Change Frequency</th>
                <th>Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="//s:url">
                <tr>
                  <td>
                    <a href="{s:loc}" target="_blank"><xsl:value-of select="s:loc"/></a>
                  </td>
                  <td>
                    <xsl:choose>
                      <xsl:when test="s:priority &gt;= 0.9">
                        <span class="priority-high"><xsl:value-of select="s:priority"/></span>
                      </xsl:when>
                      <xsl:when test="s:priority &gt;= 0.7">
                        <span class="priority-med"><xsl:value-of select="s:priority"/></span>
                      </xsl:when>
                      <xsl:otherwise>
                        <span class="priority-low"><xsl:value-of select="s:priority"/></span>
                      </xsl:otherwise>
                    </xsl:choose>
                  </td>
                  <td>
                    <span class="badge badge-{s:changefreq}"><xsl:value-of select="s:changefreq"/></span>
                  </td>
                  <td><xsl:value-of select="s:lastmod"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>

          <div class="footer">
            Generated for Essara — Modern Personal Finance &amp; Money Clarity
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
